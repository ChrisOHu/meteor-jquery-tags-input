Package.describe({
  name: 'up:jquery-tags-input',
  version: '0.0.1',
  summary: 'xoxco\'s jquery-tags-input',
  git: 'git@github.com:ShawnOceanHu/jQuery-Tags-Input.git'
});

Package.onUse(function(api) {
  api.use('jquery', 'client');

  api.addFiles([
    'lib/jQuery-Tags-Input/src/jquery.tagsinput.js',
    'lib/jQuery-Tags-Input/src/jquery.tagsinput.css',
  ], 'client');
});
