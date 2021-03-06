module.exports = {
  apps : [{
    name: 'euem',                      //이름을 설정합니다
    script: 'app.js',                  //실행할 파일을 선택합니다
    watch: true,                       //서버의 파일이 수정되면 다시 시작하도록 true
    autorestart: true,                 //자동으로 다시 시작하도록 true
    instances: 1,
    env : {                 
      NODE_ENV: 'development'
    }
  },{
		name: 'euem',                      
		script: 'app.js',
		watch: false,                       //서버의 파일이 수정되어도 재시작하지 않도록 false
		autorestart: false,                  //자동으로 다시 시작하지 않도록 false
		instances: 1,
		env : {
			NODE_ENV: 'production'
		}
	}]
};