<?php
/**
 * Cấu hình cơ bản cho WordPress
 *
 * Trong quá trình cài đặt, file "wp-config.php" sẽ được tạo dựa trên nội dung 
 * mẫu của file này. Bạn không bắt buộc phải sử dụng giao diện web để cài đặt, 
 * chỉ cần lưu file này lại với tên "wp-config.php" và điền các thông tin cần thiết.
 *
 * File này chứa các thiết lập sau:
 *
 * * Thiết lập MySQL
 * * Các khóa bí mật
 * * Tiền tố cho các bảng database
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Thiết lập MySQL - Bạn có thể lấy các thông tin này từ host/server ** //
/** Tên database MySQL */
define( 'DB_NAME', 'nuocnongthon' );

/** Username của database */
define( 'DB_USER', 'root' );

/** Mật khẩu của database */
define( 'DB_PASSWORD', '' );

/** Hostname của database */
define( 'DB_HOST', 'localhost' );

/** Database charset sử dụng để tạo bảng database. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Kiểu database collate. Đừng thay đổi nếu không hiểu rõ. */
define('DB_COLLATE', '');

/**#@+
 * Khóa xác thực và salt.
 *
 * Thay đổi các giá trị dưới đây thành các khóa không trùng nhau!
 * Bạn có thể tạo ra các khóa này bằng công cụ
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * Bạn có thể thay đổi chúng bất cứ lúc nào để vô hiệu hóa tất cả
 * các cookie hiện có. Điều này sẽ buộc tất cả người dùng phải đăng nhập lại.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Ry%^/D 8gc eL=1nG5UUKl^&$tWY&!Ux1Uc*o/o(eO}_PzC)H}k=bl$z =.4/uaJ' );
define( 'SECURE_AUTH_KEY',  '+-t:w(%[3=yK6}?A&ORG.14:tSv(`WHj;<fhd]?UCK+_6#/EO8m$Kh* $/Li<UTH' );
define( 'LOGGED_IN_KEY',    '|VY&GnGlLTOAItB BR7sUV|4Kh(Av.^r^hciAvl#XjCSqNbIiJ7&XS$gk>tfjq<4' );
define( 'NONCE_KEY',        'o@#{bhr0&8R1t5zDwLRWzaQLr@j&4m4el4e84llsorc.?NX(BQ=zpb.5?cz@:4d_' );
define( 'AUTH_SALT',        '8Ao}kD?!JQ `.VZ]e`1|Cs(&/7`]l9PZ^8B&QPLH1]g!3UjG#&d4C?0-g m_tu%v' );
define( 'SECURE_AUTH_SALT', '?_1gy-?JzFuS{@0E/4IPqy~jyF=b@cpfM8?J7Mcd$L@+oS`!HCk~!EFO]~#si(#S' );
define( 'LOGGED_IN_SALT',   'Sa;I7&&Rs=+[n{ Rt{xB/hZH~MU<fuXL=s(U8:oOzhgBXBHaV HmawI8;__>48U2' );
define( 'NONCE_SALT',       'q?_dr?-)$|Y5{)y7$~U]zhB`vP|xm$_<6|b&9L5?/T8A^Zv,T_A*D?Ne^kogJ F<' );

/**#@-*/

/**
 * Tiền tố cho bảng database.
 *
 * Đặt tiền tố cho bảng giúp bạn có thể cài nhiều site WordPress vào cùng một database.
 * Chỉ sử dụng số, ký tự và dấu gạch dưới!
 */
$table_prefix = 'wp_';

/**
 * Dành cho developer: Chế độ debug.
 *
 * Thay đổi hằng số này thành true sẽ làm hiện lên các thông báo trong quá trình phát triển.
 * Chúng tôi khuyến cáo các developer sử dụng WP_DEBUG trong quá trình phát triển plugin và theme.
 *
 * Để có thông tin về các hằng số khác có thể sử dụng khi debug, hãy xem tại Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Đó là tất cả thiết lập, ngưng sửa từ phần này trở xuống. Chúc bạn viết blog vui vẻ. */

/** Đường dẫn tuyệt đối đến thư mục cài đặt WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Thiết lập biến và include file. */
require_once(ABSPATH . 'wp-settings.php');
