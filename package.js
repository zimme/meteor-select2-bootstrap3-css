Package.describe({
  summary: 'CSS to make Select2 fit in with Bootstrap 3',
  name: 'zimme:select2-bootstrap3-css',
  git: 'https://github.com/zimme/meteor-select2-bootstrap3-css.git',
  version: '0.1.0'
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');

  api.use([
    'mizzao:bootstrap-3@3.2.0',
    'natestrauser:select2@3.4.7'
  ], 'client');

  api.addFiles('select2-bootstrap-css/select2-bootstrap.css', 'client');
});
