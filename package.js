Package.describe({
  summary: 'CSS to make Select2 fit in with Bootstrap 3',
  name: 'zimme:select2-bootstrap3-css',
  git: 'https://github.com/zimme/meteor-select2-bootstrap3-css.git',
  version: '0.0.4'
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@0.9.0');

  api.add_files('select2-bootstrap-css/select2-bootstrap.css', 'client');
});
