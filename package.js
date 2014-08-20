Package.describe({
  summary: "CSS to make Select2 fit in with Bootstrap 3",
  version: "1.4.1"
});

Package.on_use(function (api, where) {
  api.add_files('select2-bootstrap-css/select2-bootstrap.css', 'client');
});
