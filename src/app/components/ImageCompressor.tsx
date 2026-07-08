import { useState, useCallback } from 'react';
import imageCompression from 'browser-image-compression';
import { Upload, Download, X, Image as ImageIcon, FileImage } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Slider } from './ui/slider';
import { Label } from './ui/label';

interface CompressedImage {
  id: string;
  original: File;
  compressed: File | null;
  originalUrl: string;
  compressedUrl: string | null;
  originalSize: number;
  compressedSize: number | null;
  progress: number;
  isCompressing: boolean;
}

export function ImageCompressor() {
  const [images, setImages] = useState<CompressedImage[]>([]);
  const [quality, setQuality] = useState([80]);
  const [dragActive, setDragActive] = useState(false);

  const compressImage = async (file: File, id: string) => {
    setImages((prev) =>
      prev.map((img) =>
        img.id === id ? { ...img, isCompressing: true, progress: 0 } : img
      )
    );

    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        quality: quality[0] / 100,
        onProgress: (progress: number) => {
          setImages((prev) =>
            prev.map((img) =>
              img.id === id ? { ...img, progress } : img
            )
          );
        },
      };

      const compressedFile = await imageCompression(file, options);
      const compressedUrl = URL.createObjectURL(compressedFile);

      setImages((prev) =>
        prev.map((img) =>
          img.id === id
            ? {
                ...img,
                compressed: compressedFile,
                compressedUrl,
                compressedSize: compressedFile.size,
                isCompressing: false,
                progress: 100,
              }
            : img
        )
      );
    } catch (error) {
      console.error('Compression error:', error);
      setImages((prev) =>
        prev.map((img) =>
          img.id === id ? { ...img, isCompressing: false } : img
        )
      );
    }
  };

  const handleFiles = useCallback(
    (files: FileList | null) => {
      if (!files) return;

      const newImages: CompressedImage[] = Array.from(files)
        .filter((file) => file.type.startsWith('image/'))
        .map((file) => {
          const id = `${Date.now()}-${Math.random()}`;
          const originalUrl = URL.createObjectURL(file);

          return {
            id,
            original: file,
            compressed: null,
            originalUrl,
            compressedUrl: null,
            originalSize: file.size,
            compressedSize: null,
            progress: 0,
            isCompressing: false,
          };
        });

      setImages((prev) => [...prev, ...newImages]);

      // Start compression for each image
      newImages.forEach((img) => {
        compressImage(img.original, img.id);
      });
    },
    [quality]
  );

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const downloadImage = (img: CompressedImage) => {
    if (!img.compressed || !img.compressedUrl) return;

    const link = document.createElement('a');
    link.href = img.compressedUrl;
    link.download = `compressed-${img.original.name}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAll = () => {
    images.forEach((img) => {
      if (img.compressed) {
        downloadImage(img);
      }
    });
  };

  const removeImage = (id: string) => {
    setImages((prev) => {
      const img = prev.find((i) => i.id === id);
      if (img) {
        URL.revokeObjectURL(img.originalUrl);
        if (img.compressedUrl) {
          URL.revokeObjectURL(img.compressedUrl);
        }
      }
      return prev.filter((i) => i.id !== id);
    });
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const totalOriginalSize = images.reduce((sum, img) => sum + img.originalSize, 0);
  const totalCompressedSize = images.reduce((sum, img) => sum + (img.compressedSize || 0), 0);
  const savings = totalOriginalSize - totalCompressedSize;
  const savingsPercent = totalOriginalSize > 0 ? (savings / totalOriginalSize) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            TinyImage Compressor
          </h1>
          <p className="text-gray-600">
            Komprimiere deine Bilder für schnellere Ladezeiten
          </p>
        </div>

        {/* Quality Control */}
        <Card className="p-6 mb-6">
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium mb-2 block">
                Qualität: {quality[0]}%
              </Label>
              <Slider
                value={quality}
                onValueChange={setQuality}
                min={10}
                max={100}
                step={5}
                className="w-full"
              />
            </div>
            <p className="text-xs text-gray-500">
              Höhere Qualität = größere Dateien. Empfohlen: 70-85%
            </p>
          </div>
        </Card>

        {/* Upload Area */}
        <Card
          className={`p-12 mb-6 border-2 border-dashed transition-all ${
            dragActive
              ? 'border-purple-500 bg-purple-50'
              : 'border-gray-300 hover:border-purple-400'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="text-center">
            <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <p className="text-lg font-medium mb-2">
              Bilder hierher ziehen oder klicken zum Auswählen
            </p>
            <p className="text-sm text-gray-500 mb-4">
              PNG, JPG, JPEG, WebP
            </p>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleChange}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload">
              <Button variant="default" className="cursor-pointer" asChild>
                <span>
                  <FileImage className="w-4 h-4 mr-2" />
                  Bilder auswählen
                </span>
              </Button>
            </label>
          </div>
        </Card>

        {/* Stats */}
        {images.length > 0 && (
          <Card className="p-6 mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm opacity-90">Bilder</p>
                <p className="text-2xl font-bold">{images.length}</p>
              </div>
              <div>
                <p className="text-sm opacity-90">Original</p>
                <p className="text-2xl font-bold">{formatBytes(totalOriginalSize)}</p>
              </div>
              <div>
                <p className="text-sm opacity-90">Komprimiert</p>
                <p className="text-2xl font-bold">{formatBytes(totalCompressedSize)}</p>
              </div>
              <div>
                <p className="text-sm opacity-90">Ersparnis</p>
                <p className="text-2xl font-bold">{savingsPercent.toFixed(0)}%</p>
              </div>
            </div>
            {images.some((img) => img.compressed) && (
              <Button
                onClick={downloadAll}
                variant="secondary"
                className="mt-4 w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Alle herunterladen
              </Button>
            )}
          </Card>
        )}

        {/* Image List */}
        <div className="grid gap-4">
          {images.map((img) => (
            <Card key={img.id} className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Preview */}
                <div className="flex gap-4 flex-1">
                  <div className="relative w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    {img.originalUrl && (
                      <img
                        src={img.originalUrl}
                        alt="Original"
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs p-1 text-center">
                      Original
                    </div>
                  </div>

                  {img.compressedUrl && (
                    <div className="relative w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={img.compressedUrl}
                        alt="Compressed"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-purple-600 text-white text-xs p-1 text-center">
                        Komprimiert
                      </div>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <p className="font-medium truncate mb-1">{img.original.name}</p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      Original: {formatBytes(img.originalSize)}
                    </p>
                    {img.compressedSize && (
                      <p className="text-purple-600 font-medium">
                        Komprimiert: {formatBytes(img.compressedSize)} (
                        {(
                          ((img.originalSize - img.compressedSize) /
                            img.originalSize) *
                          100
                        ).toFixed(0)}
                        % kleiner)
                      </p>
                    )}
                  </div>

                  {/* Progress */}
                  {img.isCompressing && (
                    <div className="mt-2">
                      <Progress value={img.progress} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">
                        Komprimiere... {img.progress}%
                      </p>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-row md:flex-col gap-2 justify-end">
                  {img.compressed && (
                    <Button
                      onClick={() => downloadImage(img)}
                      size="sm"
                      variant="default"
                    >
                      <Download className="w-4 h-4 md:mr-2" />
                      <span className="hidden md:inline">Download</span>
                    </Button>
                  )}
                  <Button
                    onClick={() => removeImage(img.id)}
                    size="sm"
                    variant="outline"
                  >
                    <X className="w-4 h-4 md:mr-2" />
                    <span className="hidden md:inline">Entfernen</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {images.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <ImageIcon className="w-16 h-16 mx-auto mb-4" />
            <p>Keine Bilder hochgeladen</p>
          </div>
        )}
      </div>
    </div>
  );
}
