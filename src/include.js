(function() {
	var z = {};
	/**
	 加载脚本
	 url:js文件路径，因有加z.PATH，所以路径是相对于js框架根目录开始
	 **/
	z.importJS = z.importJs = function(url) {
		if (!document.body || document.readyState == 'loading') {
			document.write('<script type="text/javascript" src="' + url + '"><\/script>');
		} else {
			z.loadJS(url);
		}
	};
	/**
	 加载CSS文件
	 url:css文件路径，因有加z.PATH，所以路径是相对于js框架根目录开始
	 **/
	z.importCSS = z.importCss = function(url,win) {
		win=win&&z.isWindow(win)?win:window;
		var document=win.document;
		if (!document.body || document.readyState == 'loading') {
			document.write('<link rel="stylesheet" type="text/css" href="' + url + '" />');
		} else {
			z.loadCSS(url);
		}

	};
	/**
	 异步加载脚本
	 url:js文件路径，相对于引用js框架的页面，如果要从js框架根目录开始引用需自行加上z.JSLIBPATH
	 onsuccess:js文件加载后的回调函数
	 **/
	z.loadJS = z.loadJs = function(url, onsuccess) {
		var head = document.getElementsByTagName('head')[0] || document.documentElement,
			script = document.createElement('script'),
			done = false;
		script.src = url;
		script.onerror = script.onload = script.onreadystatechange = function() {
			if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
				done = true;
				if (onsuccess) {
					onsuccess();
				}
				script.onerror = script.onload = script.onreadystatechange = null;
				//head.removeChild(script);
			}
		};
		head.appendChild(script);
	};
	
	/**
	 异步加载CSS文件
	 url:css文件路径，相对于引用js框架的页面，如果要从js框架根目录开始引用需自行加上z.JSLIBPATH
	 **/
	//往指定的同源页面窗口加载样式文件（求url为相对于win中页面的地址）
	z.loadCSS = z.loadCss = function(url,win) {
			win=win&&z.isWindow(win)?win:window;
			var document=win.document;
			
			var head = document.getElementsByTagName('head')[0] || document.documentElement;
			if (document.createStyleSheet) {//注意：IE11的不再支持document.createStyleSheet
				document.createStyleSheet(url);
			} else {
				var e = document.createElement('link');
				e.rel = 'stylesheet';
				e.type = 'text/css';
				e.href = url;
				head.appendChild(e);
			}
	};
	if(!window.jQuery){
		z.importJs('src/jquery/jquery.min.js');
	}
	//z.importJs('src/angularjs/angular.js');
	z.importJs('src/angularjs/angular.min.js');
	z.importCss('src/bootstrap/bootstrap.min.css');
	//codemirror
	z.importCss('src/codemirror/lib/codemirror.min.css');
	z.importJs('src/codemirror/lib/codemirror.min.js');
	z.importJs('src/codemirror/mode/css/css.js');
	z.importJs('src/codemirror/mode/htmlmixed/htmlmixed.js');
	z.importJs('src/codemirror/mode/javascript/javascript.js');
	z.importJs('src/codemirror/mode/xml/xml.js');
	z.importJs('src/codemirror/addon/closebrackets.js');
	z.importJs('src/codemirror/addon/closetag.js');
})();