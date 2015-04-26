Package.describe({
  name: 'cneuro:jquery-bootstrap-dropdown-on-hover',
  version: '1.0.0',
  summary: 'Ben Miller\'s jquery-bootstrap-dropdown-on-hover',
  git: 'https://github.com/cneuro/meteor-jquery-bootstrap-dropdown-on-hover',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use('jquery', 'client');
  api.addFiles('src/jquery-bootstrap-dropdown-on-hover.js', 'client');
});
