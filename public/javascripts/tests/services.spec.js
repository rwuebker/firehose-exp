describe('services', function(){
  beforeEach(module('shApp'))
  var TweetsSvc, $httpBackend

  beforeEach(inject(function(_TweetsSvc_, _$httpBackend_){
    TweetsSvc = _TweetsSvc_
    $httpBackend = _$httpBackend_
  }))

  // afterEach(function () {
  //   $httpBackend.flush()
  // })

  describe('#getTweets', function(){
    it('exists', function(){
      expect(TweetsSvc.getTweets).to.exist
    })
  })

  describe('#getTweets', function () {
    beforeEach(function () {
      $httpBackend.expect('GET', '/api/tweets')
      .respond([
        {user: 'rickwuebker', text: 'what"s up', created_at:'Fri Mar 20, 2015', media:'http://www.something.jpg'},
        {user: 'rickwuebker2', text: 'what"s up', created_at:'Fri Mar 20, 2015', media:'http://www.something.jpg'}
      ])
    })

    it('gets 2 tweets', function () {
      TweetsSvc.getTweets().success(function (data) {
        expect(data).to.have.length(2)
      })
    })
  })

  
})



describe('services', function(){
  beforeEach(module('shApp'))
  var FirehoseSvc, $httpBackend

  beforeEach(inject(function(_FirehoseSvc_, _$httpBackend_){
    FirehoseSvc = _FirehoseSvc_
    $httpBackend = _$httpBackend_
  }))

  // afterEach(function () {
  //   $httpBackend.flush()
  // })

  describe('#getTweets', function(){
    it('exists', function(){
      expect(FirehoseSvc.getTweets).to.exist
    })
  })

  describe('#getTweets', function () {
    beforeEach(function () {
      $httpBackend.expect('GET', '/api/firehose')
      .respond([
        {user: 'rickwuebker', text: 'what"s up', created_at:'Fri Mar 20, 2015', media:'http://www.something.jpg'},
        {user: 'rickwuebker2', text: 'what"s up', created_at:'Fri Mar 20, 2015', media:'http://www.something.jpg'}

      ])
    })

    it('gets 2 tweets', function () {
      FirehoseSvc.getTweets().success(function (data) {
        expect(data).to.have.length(2)
      })
    })
  })

  
})