const Mock = require('mockjs')
// 使用语法：1.Mock.mock( rurl, function( options ) ) , 2.Mock.mock( rurl, rtype, function( options ) )

// 登录（登录后需获取动态路由）
Mock.mock(RegExp('/v1/login' + ".*"), 'post', (options) => {
	let par = JSON.parse(options.body)
	let resData = {"error":0,"msg":"ok","body":{loginCity: '广州',loginDate: '2021-3-3',"token":"153eae3fe54315062d2151f9d1218f54","uid":139620,"nickName":JSON.parse(options.body).username,"mobile":"","fund":"24101.74","fund_lock":"955.00","gcoin":36,"headimg":"http://wx4.sinaimg.cn/thumb150/8f9a6d2ely1ffxo1ifuruj21w01w0b2a.jpg?imageView2/1/w/80/h/80"},"time":1620468008}
	let errorRes = {"error":70001,"msg":"账号不存在","time":1620467475}
	if(par.username === 'admin' && par.password === '123123'){
		return resData
	}else if(par.username === 'user' && par.password === '123123'){
		return resData
	}else{
		return errorRes
	}
	
})
// 登出
Mock.mock(RegExp('/v1/logout' + ".*"), 'post', (options) => {
	let resData = {
		error: 0,
		msg: 'ok',
		body: '退出成功',
		time: 1620466240,
	}
	return resData
})
// 获取动态路由（模拟接口，根据options.body参数返回不同路由）
Mock.mock(RegExp('/v1/getPermissionMenu' + ".*"), 'post', (options) => {
	let par = JSON.parse(options.body)
	
	let adminData = {
		error: 0,
		msg: 'ok',
		time: 1620466240,
		body: [
			{
				icon: 'el-icon-lx-home',
				path: '/dashboard',
				title: '系统首页'
			},
			{
				icon: 'el-icon-lx-cascades',
				path: '/baseTable',
				title: '基础表格'
			},
			{
				icon: 'el-icon-lx-global',
				path: '/i18n',
				title: '国际化功能',
				// hidden: true
			},
			{
				icon: 'el-icon-lx-warn',
				path: '/error',
				title: '错误处理',
				hidden: true,
				children: [
					{
						path: '/error/403',
						title: '403页面'
					},
					{
						path: '/error/404',
						title: '404页面'
					}
				]
			},
		],
	}
	let userData = {
		error: 0,
		msg: 'ok',
		time: 1620466240,
		body: [
			{
				icon: 'el-icon-lx-home',
				path: '/dashboard',
				title: '系统首页'
			},
			{
				icon: 'el-icon-lx-cascades',
				path: '/baseTable',
				title: '基础表格'
			},
			{
				icon: 'el-icon-lx-global',
				path: '/i18n',
				title: '国际化功能'
			},
			/* {
				icon: 'el-icon-lx-warn',
				path: '/error',
				title: '错误处理',
				children: [
					{
						path: '/error/403',
						title: '403页面'
					},
					{
						path: '/error/404',
						title: '404页面'
					}
				]
			}, */
			
		],
	}
	if(par.username === 'admin'){
		return adminData
	}else{
		return userData
	}
})

// 获取表格数据
Mock.mock(RegExp('/v1/getTableData' + ".*"), 'post', (options) => {
	let tableData = {
		error: 0,
		msg: 'ok',
		time: 1620466240,
		body: {
			'list': [
				{
					'id': 1,
					'name': '张三',
					'money': 123,
					'address': '广东省东莞市长安镇',
					'state': '成功',
					'date': '2019-11-1',
					'thumb': 'https://lin-xin.gitee.io/images/post/wms.png'
				},
				{
					'id': 2,
					'name': '李四',
					'money': 456,
					'address': '广东省广州市白云区',
					'state': '成功',
					'date': '2019-10-11',
					'thumb': 'https://lin-xin.gitee.io/images/post/node3.png'
				},
				{
					'id': 3,
					'name': '王五',
					'money': 789,
					'address': '湖南省长沙市',
					'state': '失败',
					'date': '2019-11-11',
					'thumb': 'https://lin-xin.gitee.io/images/post/parcel.png'
				},
				{
					'id': 4,
					'name': '赵六',
					'money': 1011,
					'address': '福建省厦门市鼓浪屿',
					'state': '成功',
					'date': '2019-10-20',
					'thumb': 'https://lin-xin.gitee.io/images/post/notice.png'
				}
			],
			'pageTotal': 40,
		}
	}
	return tableData
})


