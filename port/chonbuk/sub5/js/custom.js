jQuery(document).ready(function(){
	var tbody = $('#tbody');
	$.ajax({
		url:'data.xml',
		dataType:'xml',
		success:function(xml){
			var list = $(xml);
			list.find('row').each(function(){
				var row = $(this);
				var text_cell1 = row.find('cell1').text();
				var text_cell2 = row.find('cell2').text();
				var text_cell3 = row.find('cell3').text();
				var text_cell4 = row.find('cell4').text();
				var text_cell5 = row.find('cell5').text();
				var tr = $('<div class="row"></div>');
				var cell1 = $('<div class="cell1 cell"></div>').text(text_cell1);
				var cell2 = $('<div class="cell2 cell"></div>').text(text_cell2);
				var cell3 = $('<div class="cell3 cell"></div>').text(text_cell3);
				var cell4 = $('<div class="cell4 cell"></div>').text(text_cell4);
				var cell5 = $('<div class="cell5 cell"></div>').text(text_cell5);
				tr.append(cell1);
				tr.append(cell2);
				tr.append(cell3);
				tr.append(cell4);
				tr.append(cell5);
				tbody.append(tr);
			});
		}
	});
});


