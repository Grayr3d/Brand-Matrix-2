import React from 'react';
import { Upload, FolderOpen, Grid, List, MoreVertical } from 'lucide-react';

const assets = [
  { id: 1, name: 'Logo Primary.svg', type: 'SVG', size: '156 KB', updatedAt: '2h ago' },
  { id: 2, name: 'Brand Guidelines.pdf', type: 'PDF', size: '2.4 MB', updatedAt: '1d ago' },
  { id: 3, name: 'Hero Image.png', type: 'PNG', size: '1.2 MB', updatedAt: '3d ago' },
  { id: 4, name: 'Social Media Kit.zip', type: 'ZIP', size: '5.6 MB', updatedAt: '1w ago' },
];

const BrandAssets: React.FC = () => {
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Brand Assets</h1>
          <p className="text-primary-200 mt-1">Manage and organize your brand files</p>
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
          <button className="btn-primary flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Upload Assets
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {assets.map((asset) => (
            <div
              key={asset.id}
              className="bg-primary-800/50 rounded-xl border border-primary-700 p-4 hover:border-primary-600 transition-all group"
            >
              <div className="aspect-square rounded-lg bg-primary-700/50 mb-4 flex items-center justify-center">
                <FolderOpen className="h-12 w-12 text-primary-400" />
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-white font-medium truncate">{asset.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-primary-300">{asset.type}</span>
                    <span className="text-xs text-primary-300">•</span>
                    <span className="text-xs text-primary-300">{asset.size}</span>
                  </div>
                </div>
                <button className="text-primary-200 hover:text-white transition-colors">
                  <MoreVertical className="h-5 w-5" />
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
                <th className="text-left text-sm font-semibold text-primary-200 px-6 py-4">Updated</th>
                <th className="text-left text-sm font-semibold text-primary-200 px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr key={asset.id} className="border-b border-primary-700/50 last:border-0">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <FolderOpen className="h-5 w-5 text-primary-400" />
                      <span className="text-white">{asset.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-700/50 text-primary-200">
                      {asset.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-primary-200">{asset.size}</td>
                  <td className="px-6 py-4 text-primary-200">{asset.updatedAt}</td>
                  <td className="px-6 py-4">
                    <button className="text-primary-200 hover:text-white transition-colors">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BrandAssets;