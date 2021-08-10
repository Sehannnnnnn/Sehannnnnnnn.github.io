	// calendar �⑥닔
	function calendar(new_year, new_month){
		// �뱀젙 亮닸쐢�� �쒖옉�쇰��� 議고쉶(year, month, date)
		var	d = new Date(new_year, new_month-1, 1),
		    // �붾퀎 �쇱닔 援ы븯湲�
		    d_length = 32 - new Date(new_year, new_month-1, 32).getDate(),
		    year = d.getFullYear(),
		    month = d.getMonth(),
		    date = d.getDate(),
		    day = d.getDay();

		// caption �곸뿭 �좎쭨 �쒖떆 媛앹껜
		var caption_year = document.querySelector('.year'),
		    caption_month = document.querySelector('.month');

		var start_day = document.querySelectorAll('tr td');

		// �뚯씠釉� 珥덇린��
		for(var i = 0; i < start_day.length; i++){
			start_day[i].innerHTML = '&nbsp;';
		}

		// �쒕떖移� �좎쭨瑜� �뚯씠釉붿뿉 �쒖옉 �붿씪遺��� �쒖꽌��濡� �쒖떆
		for(var i = day; i < day + d_length; i++){
		  start_day[i].innerHTML = date;
		  date++;
		}

		// caption �좎쭨 �쒖떆
		caption_year.innerHTML = year;
		caption_month.innerHTML = month + 1;		
	}
	

	(function(){
		var prev = document.getElementById('prev'),
			next = document.getElementById('next'),
			year = new Date().getFullYear(),
			month = new Date().getMonth() + 1;

		calendar(year, month);
		prev.onclick = function(){
			calendar(year, --month);
		};
		next.onclick = function(){
			calendar(year, ++month);
		};		

	})();