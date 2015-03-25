Package.describe({
  name: 'up:jQuery-tags-input',
  version: '0.0.1',
  summary: 'xoxco\'s jquery-tags-input',
  git: 'git@github.com:ShawnOceanHu/jQuery-Tags-Input.git'
});

Package.onUse(function(api) {
  api.use('jQuery', 'client');

  api.addFiles([
    'lib/jQuery-Tags-Input/jquery.tagsinput.js',
    'lib/jQuery-Tags-Input/jquery.tagsinput.css',
  ], 'client');
});
