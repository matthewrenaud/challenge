

module.exports.create = {
  method:'POST',
  url:'',
  action:function () {
    this.end(null, 'yooo');
  }
}

module.exports.view = {
  method:'GET',
  url:'',
  action:function () {
    this.end(null, this.user);
  }
}


