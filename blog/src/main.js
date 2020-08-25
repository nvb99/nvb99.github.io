﻿window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-end');
});

//Get the button:
mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// Initiate Angular JS library
var app = angular.module('myApp', ['ngMaterial', 'angularUtils.directives.dirPagination']);
app.controller('MyController',  function($scope, $http){
    
    // danh sach bai viet
	$scope.posts = [
        {
			title: "Chọn mật khẩu an toàn tránh kẻ xấu xâm nhập bất hợp pháp!",
			image: "src/img/post/chon-mat-khau-tot.png",
			tag: "Thủ thuật, Bảo mật",
			time: "19:00 04.07.2020",
			summary: "Dạo gần đây, vấn đề bảo mật cho các tài khoản mạng xã hội của các bạn sinh viên đã đang làm mối lo ngại về vấn đề \"an ninh mạng\"",
			content: "CHỌN MẬT KHẨU AN TOÀN - TRÁNH KẺ XẤU XÂM NHẬP BẤT HỢP PHÁP\n<br/>HÃY CHIA SẺ, NẾU BẠN THẤY NÓ HỮU ÍCH\n<br/><br/>Dạo gần đây, vấn đề bảo mật cho các tài khoản mạng xã hội của các bạn sinh viên đã đang làm mối lo ngại về vấn đề \"an ninh mạng\".\n<br/>\n<br/>Với các tài khoản cá nhân như tài khoản Gmail, Facebook, Instagram,…, lời khuyên tốt nhất cho bạn là nên sử dụng các mật khẩu có độ mạnh để bảo vệ tài khoản của mình không bị người khác đăng nhập và sử dụng trái phép. Nó tương tự như việc bạn chọn một ổ khóa để cất giữ kho báu của mình vậy.\n<br/>\n<br/>Hôm nay, mình sẽ chia sẻ cho các bạn cách chúng ta chọn mật khẩu tốt và đủ mạnh để phòng tránh kẻ xấu xâm nhập bất hợp pháp.\n<br/>\n<br/>Nếu các bạn cảm thấy lo ngại về vấn đề bảo mật, liệu ngày mai có đến lượt mình bị hack?\n<br/>Vậy tại sao bạn không thử search google xem?\n<br/>\n<br/>Đây đây, ví dụ mình thấy đã có chia sẻ khá chi tiết từ trang quantrimang rồi đây nè: ( <a href=\"https://quantrimang.com/6-cach-tao-mat-khau-an-toan-nhat-109825\">link</a> )\n<br/>\n<br/>Bên cạnh, mình cũng chia sẻ một số tips ngắn gọn này nhé!\n<br/>\n<br/>1. Đặt mật khẩu ít nhất 08 ký tự, chứa chữ in hoa, chữ in thường, ký tự số, các ký tự đặc biệt (!@#$%^&*()_+)\n<br/>2. Gắn tài khoản với một số điện thoại để khôi phục mật khẩu khi cần thiết.\n<br/>3. Thường xuyên kiểm tra bảo mật, xem lại các lần đăng nhập của tài khoản - đừng xem thường những email cảnh báo bảo mật.\n<br/>4. Nếu thấy hoạt động bất thường, phải nhanh chóng, thường xuyên thay đổi mật khẩu.\n<br/>5. Nếu là Facebook, bạn có tùy chọn \"Đăng xuất khỏi tất cả các phiên\". Bảo mật 2 lớp tuy khá phiền nhưng sẽ giúp ích cho bạn rất nhiều đấy!\n<br/>6. Không lưu trữ thông tin quan trọng vào những nơi không an toàn.\n<br/>7. Tuyệt đối không chia sẻ thông tin cá nhân khi không thật sự cần (ngày sinh, họ tên, mssv, cmnd, ...)\n<br/>8. Mật khẩu không nên chứa thông tin cá nhân.\n<br/>9. ... rất nhiều nữa, mình tin là vậy ... anh em biết có thể chia sẻ thêm ở phần bình luận nhé!\n<br/>\n<br/>Chốt lại là, chúng ta càng cố gắng bảo mật, các hacker cũng sẽ ngày càng cố gắng tìm cách mới để xâm nhập. Nhưng hãy kiên trì làm theo những bước trên (bao gồm bước search google là quan trọng nhất), luôn tự bảo vệ mình để không phải hối tiếc.\n<br/>\n<br/>Chúc các bạn sử dụng mạng an toàn, hiệu quả.<br/><br/> -> Xem <a href=\"https://www.facebook.com/tech.nvb99/posts/139836221012216\"> bài viết </a> trên Fanpage!"
		},
        {
            title   : "Lời giới thiệu - Trang tin \"Tôi là sinh viên năm nhất!\"",
            image   : "src/img/post/default.jpg",
            time    : "19:00 28.01.2020",
            tag     : "Sinh viên",
            summary : "Chuyển sang một môi trường mới, nhiều bạn sẽ xa gia đình từ miền quê lên thành phố, chắc hẳn các bạn sẽ gặp không ít khó khăn! Chúng ta sẽ ở đâu? Sẽ ở cùng ai? Hằng ngày phải ăn gì? Phải đến trường bằng cách nào...",
            content : `<span><font face="inherit">Bạn còn là một học sinh cấp 3 đang chuẩn bị bước vào ngưỡng cửa Đại học, Cao Đẳng?</font></span><div>
            <span><font face="inherit">Chuyển sang một môi trường mới, nhiều bạn sẽ xa gia đình từ miền quê lên thành phố, chắc hẳn các bạn sẽ gặp không ít khó khăn! Chúng ta sẽ ở đâu? Sẽ ở cùng ai? Hằng ngày phải ăn gì? Phải đến trường bằng cách nào? Bạn sẽ phải tự lập khi không còn trong vòng tay của bố mẹ, của gia đình thân yêu, liệu bạn sẽ thế nào? ...</font></span></div>
            <div>
            <span><font face="inherit"><br /></font></span></div>
            <div>
            <span><font face="inherit">Tôi, hiện là sinh viên năm 03 rồi, tôi đã từng có những cảm giác đó, rất nhiều câu hỏi nảy ra trong đầu tôi, khi cũng một thời vừa bước chân lên thành phố để học Đại học. Vâng, lúc ấy tưởng chừng tôi đã khóc, khóc một trận thật lớn như thuở nhỏ đòi kẹo vậy...</font></span></div>
            <div>
            <span><font face="inherit"><br /></font></span></div>
            <div>
            <span><font face="inherit">Và rồi, đâu đó những vòng tay, những tiếng gọi thân thương từ các anh chị sinh viên năm 2, năm 3. Tôi tình cờ biết đến Chương trình Đồng hành cùng Tân sinh viên mà hầu như bất kỳ trường Đại học nào cũng có để hỗ trợ những hoàn cảnh như tôi - chân ướt, chân ráo đến nơi xứ lạ quê người. Tôi đã đứng dậy, vui sướng biết bao khi đã tìm được ngôi nhà thứ hai của mình!</font></span></div>
            <div>
            <span><font face="inherit"><br /></font></span></div>
            <div>
            <span><font face="inherit">Xuất phát từ câu chuyện của bản thân tôi, cả những người bạn của tôi nữa. Có lẽ nó đã làm thôi thúc trong tôi một hành động, hãy chia sẻ những kinh nghiệm sống của những người đi trước, để giúp các em nhỏ vững tin hơn với môi trường mới của mình!</font></span></div>
            <div>
            <span><font face="inherit"><br /></font></span></div>
            <div>
            <span><font face="inherit">Đây sẽ là trang thông tin chia sẻ, đồng hành cùng Tân sinh viên trong những năm tháng bỡ ngỡ bước vào ngưỡng cửa Đại học. Là chia sẻ của những anh chị Sinh viên 5 tốt, những anh chị hiện là Cán bộ Đoàn Hội từ Khoa đến Trường. Giúp đỡ các bạn tân sinh viên trong việc tìm nhà trọ, hướng dẫn các kỹ năng cần thiết cho sinh viên... để tiếp sức cho các bạn trẻ, đã dùi mài kinh sử, xuất sắc giành lấy tấm vé vào Cổng Đại học Cao đẳng.</font></span></div>
            <div>
            <span><font face="inherit"><br /></font></span></div>
            <div>
            <span><font face="inherit">Hãy mạnh mẽ lên, bắt đầu một cuộc sống mới nơi ngôi nhà thứ hai này. Vững tin xây dựng hành trang bước vào đời các bạn nhé!</font></span></div>
            <div>
            <span><font face="inherit"><br /></font></span></div>
            <div>
            <span><font face="inherit">#10.06.2020</font></span></div>
            <div>
            <span><font face="inherit"><br /></font></span></div>
            <div>
            <span><font face="inherit">Khoa Công nghệ Thông tin, Trường ĐH Mở Tp. Hồ Chí Minh.</font></span></div>
            `
        },
		{
			title: "Windows 10 Tips - Có gì mới?",
			image: "src/img/post/win-10-tips.jpg",
			tag: "Thủ Thuật Máy Tính, Windows 10 Tips",
			time: "19:00 21.01.2020",
			summary: "Nếu có chức năng nào đó trên thiết bị của bạn không hoạt động, hãy chạy “Recommended troubleshooting” để có thể tìm và khắc phục sự cố cho bạn. Cách truy nhập vào chức năng...",
			content: "<p>\n1. Chức năng khắc phục sự cố<br>\n- Nếu có chức năng nào đó trên thiết bị của bạn không hoạt động, hãy chạy “Recommended troubleshooting” để có thể tìm và khắc phục sự cố cho bạn. Cách truy nhập vào chức năng: Settings > Update & Security > Troubleshoot\n</p>\n\n<p>\n2. Chức năng Tùy chỉnh độ sáng màn hình <br>\n- Ở Laptop hoặc Tablet của bạn, chọn Action Center ở thanh Taskbar sau đó chọn Expand (mở rộng), việc còn lại là kéo thanh trượt để điều chỉnh độ sáng đến mức sáng mà bạn muốn.\n\n</p>\n\n<p>\n3. Dark Mode hoặc Light Mode cho hiển thị cài đặt của bạn. <br>\n- Chọn Start > Settings > Personalization > Colors. Ở đây bạn có thể chọn Light (sáng) hoặc Dark (tối) mode phù hợp với mình nhé!\n\n</p>\n\n<p>\n4. Thêm emoji từ bàn phím <br>\n- Nhấn tổ hợp Windows + (.) để mở Emoji Panel. Dùng kaomojis để những dòng chữ khô khan của bạn trở nên sống động hơn.\n\n</p>\n\n<p>\n5. Lưu trữ tự động các thư mục quan trọng <br>\n- Lưu trữ Tài liệu, Hình ảnh, hay những tập tin ở Desktop để chúng được bảo vệ hoàn toàn phòng khi mất thiết bị của bạn. Ở phía bên phải của thanh Taskbar, bạn chọn OneDrive (biểu tượng đám mây) > More > Settings. Ở tab Autosave, bạn chọn Update folders và chỉ định thư mục nào bạn muốn tự động đồng bộ.\n\n</p>\n\n<p>\n6. Đặt giờ hoạt động để máy tính biết thời gian bạn thường sử dụng thiết bị <br>\n- Máy tính sẽ không tự khởi động lại thiết bị của bạn trong thời gian này. Truy cập theo đường dẫn Settings > Windows Update > Change Active Hours.\n\n</p>\n\n<p>\n7. Tạm dừng cập nhật đến một thời gian nào đó thuận tiện hơn <br>- Để tạm dừng Update (cập nhật) cho thiết bị của bạn, Bạn chọn Start > Settings > Update & Security > Windows Update, sau đó chọn Pause updates. <br>- Khi bạn đã đạt đến giới hạn trì hoãn, bạn phải hoàn tất bản cập nhật mới nhất mới có thể tiếp tục đặt lịch tạm hoãn tiếp theo.\n\n</p>\n\n<p>\n8. Làm cho mọi thứ trên màn hình to hơn <br>\n- Để hiển thị chữ to hơn trên màn hình của bạn, bạn chọn Start > Settings > Ease of Access > Display, sau đó điều chỉnh thanh trượt đến kích thước chữ bạn muốn ở dưới tiêu đề \"Make text bigger\". <br>\n- Còn nếu bạn muốn tất cả mọi thứ đều lớn hơn, bạn có thể kéo xuống dưới dòng \"Make everything bigger\" và chọn một tùy chọn cho size màn hình phù hợp với nhu cầu của bạn.\n</p>\n\n<p>\n9. Bộ lọc màu: <br>\nNếu bạn nhạy cảm với ánh sáng, bạn có thể điều chỉnh màu sắc hiển thị đơn giản hơn bằng cách vào đường dẫn: Start > Settings > Ease of Access > Color filters. Sau đó chọn một bộ lọc phù hợp.\n</p>\n\n<p>\n10. Dán dữ liệu từ vùng lưu trữ đám mây tạm thời (Clipboard): <br>\n- Sao chép hình ảnh và chữ từ một máy tính sang một thiết bị khác thông qua Cloud-based Clipboard (bộ nhớ đám mây tạm thời). <br>\n- Bạn chọn Start > Settings > System > Clipboard. Đăng nhập tài khoản Microsoft của bạn và sau đó sử dụng các nút bật để bật cả lịch sử Clipboard và Đồng bộ hóa trên các thiết bị. <br>\n- Bạn cũng có thể sử dụng phím tắt Win + V để dễ dàng truy cập clipboard của mình.\n\n</p>\n\n<p>\n11. Làm cho con trỏ chuột của bạn dễ nhìn hơn <br>\n- Nếu bạn gặp khó khăn khi phát hiện con trỏ trên màn hình, hãy làm cho nó lớn hơn hoặc thay đổi màu sắc. Chọn Start > Settings > Ease of Access > Cursor & pointer. Và điều chỉnh con trỏ chuột theo ý muốn của bạn.\n</p>"
        },
        {
			title: "Cùng khám phá Vinpearl Phú Quốc vào kỳ nghỉ Tết!!",
			image: "src/img/post/vinpearl/1.jpg",
			tag: "Du lịch và Sự kiện, Phú Quốc",
			time: "19:00 14.01.2020",
			summary: "Này là Tết âm lịch 2019, mình có dịp được đi tham quan Vinpearl Land Phú Quốc cùng với mẹ mình với một số hàng xóm nữa...",
			content: "<div>\n(Chuyện hồi nào giờ mới kể)</div>\n<div>\n<br /></div>\n<div>\nHa nhan xê ô mọi người nhiee!! Đợt này ngẫu hứng ngồi viết cái Blog nên bây giờ ngồi ngẫm lại coi có gì để viết :v . Thôi lục lại mấy tấm hình cũ để xem mình đã đến được những đâu rồi nè!!</div>\n<div>\n<br /></div>\n<div>\nNày là Tết âm lịch 2019, mình có dịp được đi tham quan Vinpearl Land Phú Quốc cùng với mẹ mình với một số hàng xóm nữa.</div>\n<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" class=\"tr-caption-container\" style=\"margin-left: auto; margin-right: auto; text-align: center;\"><tbody>\n<tr><td style=\"text-align: center;\"><img alt=\"Trong hình ảnh có thể có: 2 người\" height=\"200\" src=\"../blog/src/img/post/vinpearl/1.jpg\" style=\"margin-left: auto; margin-right: auto;\" width=\"159\" /></td></tr>\n<tr><td class=\"tr-caption\" style=\"text-align: center;\"><small>Tranh thủ một tấm 2 mẹ con đã nè!!</small></td></tr>\n</tbody></table>\n<div>\nNghĩ cũng tủi thân, dân Phú Quốc chính hiệu bấy lâu, mà đây là lần đầu tiên đi để cho biết với người ta, chứ anh em hỏi ở Phú Quốc có gì vui hông? Tui toàn lắc đầu ... hổng biết!! :)))<br />\n<br />\nỞ Vinpearl Phú Quốc, lại chia ra nhiều khu vực lắm các bạn ạ. Cái này là mình đi mỗi Vinpearl Land thôi mà chóng hết cả mặt rồi ý. Có cả Safari để qua đó cho thú ngắm mình .. à nhầm đi ngắm thú :v<br />\n<br />\nMình mới chỉ đi được Vinpearl Land thôi, nên sẽ nói về Vinpearl Land có gì nha. Đây được mệnh danh là thiên đường vui chơi, giải trí đẳng cấp hàng đầu hiện nay tại Việt Nam, Vinpearl Land Phú Quốc là nơi được ví như một “Disneyland HONG KONG” với hàng trăm trò chơi trong nhà và ngoài trời dành cho mọi lứa tuổi. Với chỉ 1 tấm vé Vinpearl Land Phú Quốc duy nhất các bạn có thể thỏa thích vui chơi tất cả các trò chơi trong Vinpearl land Phú Quốc . Không giới hạn lượt chơi hay bất kể trò chơi nào (trừ trẻ em).<br />\n<br />\n<ul>\n<li><b>Trò chơi trong khu vui chơi trong nhà</b>: xe điện đụng; đua xe, bắn súng, nhảy theo nhạc….</li>\n<li><b>Trò chơi cảm giác mạnh</b>: tàu lượn siêu tốc, đu quay dây văng, cối xay gió, đĩa bay…</li>\n<li><b>Thủy cung Vinpearl</b>: khám phá thế giới bí ẩn của đại dương và hòa mình vào thế giới của những sinh vật tự nhiên độc đáo như cá mập, chim cánh cụt Gentoo lần đầu tiên có mặt tại Việt Nam</li>\n<li><b>Chương trình nàng tiên cá</b>, khám phá bí ẩn của thế giới nước dưới lòng đại dương và tận hưởng những khoảnh khắc thú vị cùng những “Nàng tiên cá” của thế giới cổ tích</li>\n<li><b>Rạp chiếu phim 5D</b></li>\n<li><b>Biểu diễn nhạc nước</b>. Sự kết hợp hoàn mỹ của sắc màu ánh sáng, chuyển động của nước, âm nhạc lôi cuốn và những hiệu ứng kỳ ảo sẽ mang đến cho du khách những giây phút thật sự khó quên</li>\n</ul>\n<br />\nVề vấn đề ăn uống, thì Vinpearl Land không cho phép mang đồ ăn từ bên ngoài vào đâu nha các bạn. Nhưng mà lỡ vào rồi thì cũng nên thử nha.<br />\n<br />\n<ul>\n<li><b>Nhà hàng Yummy Land</b>: Với sức chứa 140 khách cung cấp các sản phẩm thức ăn nhanh như hot dog, hamburger, pizza… mở cửa từ 9:00 đến 21:00 hàng ngày.</li>\n<li><b>Nhà hàng Deli Land</b>: Với sức chứa 248 khách là dòng sản phẩm buffet tự chọn và gọi món Âu – Á đặc trưng, mở cửa từ 10:00 đến 21:00 hàng ngày.</li>\n<li><b>Nhà hàng ẩm thức 3 Miền</b>: nằm cạnh con sông Venice thơ mộng &amp; trữ tình với những món ăn Việt Nam 3 Miền Bắc – Trung – Nam và các món chè đặc sắc đậm vị quê hương, tại đây du khách có thể yên tâm thưởng thức những món ngon theo đúng sở thích của mình.</li>\n</ul>\n<br />\nVà còn cả đống thứ mà trong một ngày không thể nào tham quan, vui chơi hết từng cái một nổi luôn...<br />\n<!--more--><br />\n<br />\nThế là tui lần đầu được tung hoành, mà dở cái tui không có thói quen chụp nhiều hình (tại có biết chụp đâu mà chụp) ... mà chỉ có thói quen chụp rất nhiều và xóa rất nhiều thôi à :D . Và cũng may là còn được vài tấm chia sẻ cho mọi người cùng xem nè:<br />\n<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" class=\"tr-caption-container\" style=\"margin-left: auto; margin-right: auto; text-align: center;\"><tbody>\n<tr><td style=\"text-align: center;\"><img alt=\"Không có mô tả ảnh.\" height=\"200\" src=\"/blog/src/img/post/vinpearl/0.jpg\" style=\"margin-left: auto; margin-right: auto;\" width=\"112\" /></td></tr>\n</tbody></table>\nShow nhẹ cái vé vào cổng nè! Người địa phương thì sẽ được giảm giá nhe các bạn!! Hihi. Giá thì đợt đó cũng tầm 500K với người lớn, trẻ em thì 200k, 300k cũng có. Mà cũng tùy đợt nữa. Nói chung là \"có người quen bán vé\" nên anh em có dịp ra Phú Quốc mà muốn lên Vinpearl chơi thì cứ liên hệ mình nhé! Ahihi</div>\n<div>\n<br /></div>\n<div>\nThôi, mình không biết nói gì nữa đâu :)) xem hình đi nè:</div><div class=\"row\"><div class=\"col-sm-6 col-md-6 p-2\"><img src=\"/blog/src/img/post/vinpearl/3.jpg\" width=\"100%\" /></div><div class=\"col-sm-6 col-md-6 p-2\"><img src=\"/blog/src/img/post/vinpearl/4.jpg\" width=\"100%\" /></div><div class=\"col-sm-6 col-md-4 p-2\"><img src=\"/blog/src/img/post/vinpearl/5.jpg\" width=\"100%\" /></div><div class=\"col-sm-6 col-md-4 p-2\"><img src=\"/blog/src/img/post/vinpearl/6.jpg\" width=\"100%\" /></div><div class=\"col-sm-6 col-md-4 p-2\"><img src=\"/blog/src/img/post/vinpearl/7.jpg\" width=\"100%\" /></div></div><div>\nThật ra là nhiều cảnh đẹp lắm, cơ mà mãi ngắm với mãi chơi nên hông có chụp lại kkk. Nói chung cái này là ảnh mình chụp (chưa edit).<br />\n<br />\nThôi nay \"chọc thèm\" anh em nhiêu đây thôi, cũng khá đủ rồi kaka. Nhớ nhé! Khi nào ra Phú Quốc hú mình, nhà đông anh em nên là kể cả khi mình không có ở đó vẫn có người hướng dẫn các bạn tận tình luôn nè! Cảm ơn anh em đã đọc bài hí hí</div>"
        },
		{
			title: "Task Manager là gì, sử dụng Task Manager như thế nào?",
			image:"src/img/post/task-manager.png",
			tag:"Thủ Thuật Máy Tính, Windows 10",
			time:"19:00 07.01.2020",
			summary:"Bên cạnh có thể buộc kết thúc bất kỳ một chương trình, phần mềm nào đang chạy (bằng cách chuột phải và chọn End task), cũng như để xem các chương trình chiếm bao nhiêu tài nguyên ...",
			content: "<p><strong>Task Manager là gì?</strong> - là tiện ích được tích hợp trên hệ điều hành Windows, hiển thị cho người dùng các chương trình đang chạy trên máy tính. Ngoài ra Task Manager cũng cung cấp cho người dùng kiểm soát một số hạn chế trên các tác vụ đang chạy.</p>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"text-center p-2\"><img src=\"https://www.wikihow.com/images/f/f5/Open-Windows-Task-Manager-Step-30.jpg\" alt=\"\" class=\"imgInPost\"></div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<p><strong>Sử dụng Task Manager để làm gì?</strong> - xem các ứng dụng, chương trình và dịch vụ nào đang chạy trên hệ thống. Bên cạnh có thể buộc kết thúc bất kỳ một chương trình, phần mềm nào đang chạy <em>(bằng cách chuột phải và chọn End task)</em>, cũng như để xem các chương trình chiếm bao nhiêu tài nguyên phần cứng trên máy tính, những chương trình và dịch vụ nào khởi động cùng hệ thống, ...</p>\n\n\t\t\t\t\t\t<p><strong>Khởi động Task Manager</strong> - có rất nhiều cách để khởi động Task Manager. Sau đây là một số cách bạn có thể tùy chọn:\n\t\t\t\t\t\t\t<ol>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\tNhấn tổ hợp phím <b>Ctrl + Alt + Delete</b> trên bàn phím, sau đó chọn <b>Task Manager</b>. Bạn có thể dùng tay trái nhấn giữ Ctrl và Alt, tay phải nhấn phím Delete (phía trên phím Backspace) là sẽ ra giao diện như bên dưới:<br>\n\t\t\t\t\t\t\t\t\t<p class=\"text-center\"><img src=\"https://www.iseepassword.com/images/windows/ctrl-alt-delete-screen.jpg\" alt=\"\" class=\"imgInPost\"></p>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\tCó vẻ như với mình là cách nhanh nhất khi bạn nhấn tổ hợp phím <b>Ctrl + Shift + ESC</b>, Task Manager sẽ hiển thị ngay sau đó!\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\tĐầu tiên, bạn nhấn phím <i class=\"fa fa-windows\" aria-hidden=\"true\"></i> (hoặc click chuột vào biểu tượng <i class=\"fa fa-windows\" aria-hidden=\"true\"></i> phía góc trái bên dưới màn hình), sau đó nhập từ khóa \"task manager\" hoặc gọn hơn là \"taskmgr\", khi đó danh sách tìm kiếm sẽ xuất hiện Task Manager, việc của bạn chỉ là khởi động Task Manager lên thôi!<br>\n\t\t\t\t\t\t\t\t\t<p class=\"text-center\"><img src=\"https://cdn-cms.f-static.net/uploads/3094187/2000_5e4d542f1dd91.jpg\" alt=\"\" class=\"imgInPost\"></p>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\tNếu bạn là dân IT, hay đơn giản là bạn muốn ngầu một tí, thì bạn có thể mở cmd lên và nhập \"taskmgr\" sau đó Enter, tiện ích cũng sẽ hiển thị lên màn hình ngay nhé!<br>\n\t\t\t\t\t\t\t\t\t<p class=\"text-center\"><img src=\"https://cdn-cms.f-static.net/uploads/3094187/2000_5e4d542f1a624.jpg\" alt=\"\" class=\"imgInPost\"></p>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\tMột cách khác bạn cũng có thể khởi động tiện ích này thông qua Cửa sổ Run. Bạn nhấn tổ hợp <i class=\"fa fa-windows\" aria-hidden=\"true\"></i> + R, sau đó nhập \"taskmgr\", tiếp tục Enter -> xem kết quả!<br>\n\t\t\t\t\t\t\t\t\t<p class=\"text-center\"><img src=\"https://www.trickyways.com/wp-content/uploads/2013/11/taskmanager-run-command.png\" alt=\"\" class=\"imgInPost\"></p>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\tMột cách khác nhanh không thua kém gì cách 2, bạn chuột phải lên thanh Taskbar (thanh làm việc mặc định bên dưới màn hình) sau đó chọn <b>Task Manager</b>. Đây cũng là cách mà mình hay sử dụng nhất!<br>\n\t\t\t\t\t\t\t\t\t<p class=\"text-center\"><img src=\"https://cdn-cms.f-static.net/uploads/3094187/2000_5e4d542f26583.jpg\" alt=\"\" class=\"imgInPost\"></p>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t<p>Hmm, mình thấy các cách bên trên là phổ biến nhất rồi ý, các bạn có thể lựa chọn cách nào phù hợp với bản thân và sử dụng một cách phù hợp nhé! Chúc các bạn thành công!</p>\n\t\t\t\t\t\t</p>"
		},
        {
			title: "Chào mừng bạn ghé thăm NVB 99 Official!!",
			image: "../img/ava.jpg",
			tag: "NVB 99",
			time: "19:00 30.12.2019",
			summary: "Xin chào mọi người. Tôi là Bảy, nickname là Jason. Tôi là một Coder, Designer, Freelancer. Sở thích của tôi là viết code, âm nhạc, du lịch, ...",
			content: "Xin chào mọi người. Tôi là Bảy, nickname là Jason. <br/> Tôi là một Coder, Designer, Freelancer. Sở thích của tôi là viết code, âm nhạc, du lịch, ... <br/>Nếu bạn muốn có một website để gắn vào CV như tôi, hoặc bạn muốn thành lập một cửa hàng online? Hay khác đi, bạn muốn tìm hiểu về những thủ thuật, kỹ thuật hay kỹ năng sống? Đừng ngần ngại liên hệ với tôi theo thông tin có sẵn hoặc điền vào <a href=\"/#contact\">Biểu mẫu</a> và gửi nó cho tôi nhé!<br/><br/>-------------<br/><br/> <p>QUÊ TÔI - PHÚ QUỐC CÓ GÌ HOT??? <br/> Nếu bạn đang có ý định lên kế hoạch cho một chuyến đến Phú Quốc, bạn còn hoang mang chưa biết nên đi như thế nào, ở đâu, tham quan những nơi đâu, ... hãy liên hệ ngay với tôi nhé! (Dân Phú Quốc chính hiệu từ khi sinh ra nè :D) <br/><b>Contact me</b>: <br/>- Email: <a href=\"mailto:tech.nvb99@gmail.com\">tech.nvb99@gmail.com</a> <br/>- Website: <a href=\"https://nvb99.github.io\">nvb99.github.io</a> <br/>- SĐT: (097) 954 19 34 <br/>- Fanpage: <a href=\"https://www.facebook.com/tech.nvb99\">NVB Tech</a></p><p style=\"text-align: center\"><iframe width=\"\" height=\"\" src=\"https://www.youtube.com/embed/PCWIxoGq_BI\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></p>"
        }
    ];

	$scope.current_post = $scope.posts[0];

    $scope.post_id      = $scope.current_post.id;
	$scope.post_title   = $scope.current_post.title;
	$scope.post_tag     = $scope.current_post.tag;
	$scope.post_time    = $scope.current_post.time;
	$scope.post_content =
	document.getElementById('post_content_place').insertAdjacentHTML("beforeend",
		$scope.current_post.content);

	$scope.readDetail = function (item) {
		document.getElementById('post_content_place').innerHTML = "";

        $scope.post_id      = item.id;
		$scope.post_title   = item.title;
		$scope.post_tag     = item.tag;
		$scope.post_time    = item.time;
		$scope.post_content = document.getElementById('post_content_place').insertAdjacentHTML("beforeend",
		item.content);
	}
})