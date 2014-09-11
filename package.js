Package.describe({
  summary: 'CSS to make Select2 fit in with Bootstrap 3',
  name: 'zimme:select2-bootstrap3-css',
  git: 'https://github.com/zimme/meteor-select2-bootstrap3-css.git',
  version: '0.1.1'
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');

  api.addFiles('select2-bootstrap-css/select2-bootstrap.css', 'client');
});
