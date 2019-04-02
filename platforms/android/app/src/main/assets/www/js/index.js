/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    //app初始化
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    
    //准备完毕
    onDeviceReady: function() {
		

		/* 判断SMS插件是否存在 */
		if(typeof (SMSReceive) === 'undefined') {
			// 抛出错误，插件初始化失败
			alert('SMSReceive: plugin not present');
			document.getElementById('status').innerHTML = 'Error: The plugin <strong>cordova-plugin-sms-receive</strong> is not present';
		} else {
			// Initialize incoming SMS event listener
			document.addEventListener('onSMSArrive', function(e) {
				console.log('onSMSArrive()');
				var IncomingSMS = e.data;
				console.log('sms.address:' + IncomingSMS.address);
				console.log('sms.body:' + IncomingSMS.body);
				// Debug received SMS contents as JSON
				document.getElementById('event').innerHTML = 'SMS from: ' + IncomingSMS.address + '<br />Service Center: ' + IncomingSMS.service_center + '<br />Received on: ' + IncomingSMS.date + '<br />Body: ' + IncomingSMS.body;
			});

			// Bind Start Watch method to button 1
			document.getElementById('startWatch').addEventListener('click', function() {
				SMSReceive.startWatch(function() {
					document.getElementById('status').innerHTML = 'SMS Watching started';
				}, function() {
					document.getElementById('status').innerHTML = 'Plugin failed to start watching';
				});
			});

			// Bind Stop Watch method to button 2
			document.getElementById('stopWatch').addEventListener('click', function() {
				SMSReceive.stopWatch(function() {
					document.getElementById('status').innerHTML = 'SMS Watching stopped';
				}, function() {
					document.getElementById('status').innerHTML = 'Plugin failed to stop watching';
				});
			});
		}
    }

};

app.initialize();