import React, { useState } from 'react';
import { Upload, FolderOpen, Grid, List, MoreVertical, Search, Filter, Plus, Image, FileText, Download, Share2, Trash2, Edit2 } from 'lucide-react';
import { toast } from 'sonner';

interface Asset {
  id: number;
  name: string;
  type: string;
  size: string;
  updatedAt: string;
  thumbnail?: string;
  category: string;
  tags: string[];
  favorite: boolean;
  downloads: number;
  shared: boolean;
}

const assets: Asset[] = [
  {
    id: 1,
    name: 'Logo Primary.svg',
    type: 'SVG',
    size: '156 KB',
    updatedAt: '2h ago',
    category: 'Logos',
    tags: ['logo', 'branding', 'primary'],
    favorite: true,
    downloads: 245,
    shared: true
  },
  {
    id: 2,
    name: 'Brand Guidelines.pdf',
    type: 'PDF',
    size: '2.4 MB',
    updatedAt: '1d ago',
    category: 'Guidelines',
    tags: ['documentation', 'guidelines'],
    favorite: false,
    downloads: 189,
    shared: true
  },
  {
    id: 3,
    name: 'Hero Image.png',
    type: 'PNG',
    size: '1.2 MB',
    updatedAt: '3d ago',
    category: 'Images',
    tags: ['hero', 'website'],
    favorite: false,
    downloads: 56,
    shared: false
  },
  {
    id: 4,
    name: 'Social Media Kit.zip',
    type: 'ZIP',
    size: '5.6 MB',
    updatedAt: '1w ago',
    category: 'Social Media',
    tags: ['social', 'marketing'],
    favorite: true,
    downloads: 432,
    shared: true
  }
];

const categories = [
  { id: 'all', label: 'All Assets', count: assets.length },
  { id: 'logos', label: 'Logos', count: assets.filter(a => a.category === 'Logos').length },
  { id: 'guidelines', label: 'Guidelines', count: assets.filter(a => a.category === 'Guidelines').length },
  { id: 'images', label: 'Images', count: assets.filter(a => a.category === 'Images').length },
  { id: 'social', label: 'Social Media', count: assets.filter(a => a.category === 'Social Media').length }
];

const BrandAssetsPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [showAssetDetails, setShowAssetDetails] = useState(false);

  const filteredAssets = assets.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         asset.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || asset.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

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
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload
      toast.success('File uploaded successfully');
      setShowUploadModal(false);
    }
  };

  const handleAssetAction = (action: 'download' | 'share' | 'edit' | 'delete', asset: Asset) => {
    switch (action) {
      case 'download':
        toast.success(`Downloading ${asset.name}`);
        break;
      case 'share':
        toast.success(`Sharing link copied to clipboard`);
        break;
      case 'edit':
        setSelectedAsset(asset);
        setShowAssetDetails(true);
        break;
      case 'delete':
        if (window.confirm('Are you sure you want to delete this asset?')) {
          toast.success(`${asset.name} deleted`);
        }
        break;
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Brand Assets</h1>
            <p className="mt-2 text-lg text-primary-200">Manage and organize your brand files</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-primary-800/50 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-primary-700 text-white'
                    : 'text-primary-200 hover:text-white'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list'
                    ? 'bg-primary-700 text-white'
                    : 'text-primary-200 hover:text-white'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
            <button
              onClick={() => setShowUploadModal(true)}
              className="btn-primary flex items-center gap-2"
            >
              <Upload className="h-5 w-5" />
              Upload Assets
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px,1fr] gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <div className="bg-primary-800/50 rounded-xl border border-primary-700 p-4">
              <h3 className="text-sm font-medium text-primary-200 mb-3">Categories</h3>
              <div className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary-700 text-white'
                        : 'text-primary-200 hover:text-white hover:bg-primary-700/50'
                    }`}
                  >
                    <span>{category.label}</span>
                    <span className="text-sm text-primary-400">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-primary-800/50 rounded-xl border border-primary-700 p-4">
              <h3 className="text-sm font-medium text-primary-200 mb-3">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-primary-200">Total Assets</span>
                  <span className="text-white font-medium">{assets.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary-200">Storage Used</span>
                  <span className="text-white font-medium">9.4 MB</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary-200">Shared Assets</span>
                  <span className="text-white font-medium">
                    {assets.filter(a => a.shared).length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Assets Grid/List */}
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="bg-primary-800/50 rounded-xl border border-primary-700 p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-400" />
                  <input
                    type="text"
                    placeholder="Search assets..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-primary-700/50 border border-primary-600 rounded-lg text-white placeholder-primary-400 focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-primary-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-primary-700/50 border border-primary-600 rounded-lg text-white px-3 py-2 focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400"
                  >
                    <option value="all">All Categories</option>
                    <option value="logos">Logos</option>
                    <option value="guidelines">Guidelines</option>
                    <option value="images">Images</option>
                    <option value="social media">Social Media</option>
                  </select>
                </div>
              </div>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAssets.map((asset) => (
                  <div
                    key={asset.id}
                    className="group bg-primary-800/50 rounded-xl border border-primary-700 p-4 hover:border-primary-600 transition-all"
                  >
                    <div className="aspect-square rounded-lg bg-primary-700/50 mb-4 flex items-center justify-center relative group">
                      <FolderOpen className="h-12 w-12 text-primary-400" />
                      <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleAssetAction('download', asset)}
                          className="p-2 rounded-lg bg-primary-700 text-white hover:bg-primary-600 transition-colors"
                        >
                          <Download className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleAssetAction('share', asset)}
                          className="p-2 rounded-lg bg-primary-700 text-white hover:bg-primary-600 transition-colors"
                        >
                          <Share2 className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleAssetAction('edit', asset)}
                          className="p-2 rounded-lg bg-primary-700 text-white hover:bg-primary-600 transition-colors"
                        >
                          <Edit2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-white font-medium truncate">{asset.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-primary-300">{asset.type}</span>
                          <span className="text-xs text-primary-300">•</span>
                          <span className="text-xs text-primary-300">{asset.size}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {asset.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs rounded-full bg-primary-700/50 text-primary-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => handleAssetAction('delete', asset)}
                        className="text-primary-200 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-primary-800/50 rounded-xl border border-primary-700 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-primary-700">
                      <th className="text-left text-sm font-semibold text-primary-200 px-6 py-4">Name</th>
                      <th className="text-left text-sm font-semibold text-primary-200 px-6 py-4">Type</th>
                      <th className="text-left text-sm font-semibold text-primary-200 px-6 py-4">Size</th>
                      <th className="text-left text-sm font-semibold text-primary-200 px-6 py-4">Downloads</th>
                      <th className="text-left text-sm font-semibold text-primary-200 px-6 py-4">Updated</th>
                      <th className="text-left text-sm font-semibold text-primary-200 px-6 py-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAssets.map((asset) => (
                      <tr key={asset.id} className="border-b border-primary-700/50 last:border-0">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <FolderOpen className="h-5 w-5 text-primary-400" />
                            <div>
                              <span className="text-white block">{asset.name}</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {asset.tags.map((tag, index) => (
                                  <span
                                    key={index}
                                    className="px-1.5 py-0.5 text-xs rounded-full bg-primary-700/50 text-primary-200"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-700/50 text-primary-200">
                            {asset.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-primary-200">{asset.size}</td>
                        <td className="px-6 py-4 text-primary-200">{asset.downloads}</td>
                        <td className="px-6 py-4 text-primary-200">{asset.updatedAt}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleAssetAction('download', asset)}
                              className="p-1 rounded-lg text-primary-200 hover:text-white transition-colors"
                            >
                              <Download className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleAssetAction('share', asset)}
                              className="p-1 rounded-lg text-primary-200 hover:text-white transition-colors"
                            >
                              <Share2 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleAssetAction('edit', asset)}
                              className="p-1 rounded-lg text-primary-200 hover:text-white transition-colors"
                            >
                              <Edit2 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleAssetAction('delete', asset)}
                              className="p-1 rounded-lg text-primary-200 hover:text-red-400 transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 bg-primary-900/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-primary-800 rounded-xl border border-primary-700 p-6 w-full max-w-md">
              <h2 className="text-xl font-semibold text-white mb-4">Upload Assets</h2>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center ${
                  dragActive
                    ? 'border-accent-400 bg-accent-400/10'
                    : 'border-primary-600 hover:border-primary-500'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center">
                  <Upload className="h-12 w-12 text-primary-400 mb-4" />
                  <p className="text-white mb-2">Drag and drop your files here</p>
                  <p className="text-primary-200 text-sm mb-4">or</p>
                  <label className="btn-primary cursor-pointer">
                    <input type="file" className="hidden" multiple />
                    <Plus className="h-4 w-4 mr-2" />
                    Choose Files
                  </label>
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Asset Details Modal */}
        {showAssetDetails && selectedAsset && (
          <div className="fixed inset-0 bg-primary-900/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-primary-800 rounded-xl border border-primary-700 p-6 w-full max-w-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Asset Details</h2>
                <button
                  onClick={() => setShowAssetDetails(false)}
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="aspect-square rounded-lg bg-primary-700/50 mb-4 flex items-center justify-center">
                    <FolderOpen className="h-16 w-16 text-primary-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4 text-primary-400" />
                      <span className="text-primary-200">{selectedAsset.downloads} downloads</span>
                    </div>
                    <button className="text-accent-400 hover:text-accent-300 transition-colors">
                      Download
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-primary-200 mb-1">
                      File Name
                    </label>
                    <input
                      type="text"
                      value={selectedAsset.name}
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-200 mb-1">
                      Tags
                    </label>
                    <input
                      type="text"
                      value={selectedAsset.tags.join(', ')}
                      className="input-field"
                      placeholder="Add tags separated by commas"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-200 mb-1">
                      Category
                    </label>
                    <select className="input-field" defaultValue={selectedAsset.category}>
                      <option value="Logos">Logos</option>
                      <option value="Guidelines">Guidelines</option>
                      <option value="Images">Images</option>
                      <option value="Social Media">Social Media</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    <button className="btn-primary w-full">Save Changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandAssetsPage;