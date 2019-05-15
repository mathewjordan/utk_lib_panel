echo 'Shipping React Build to...';
echo '~/Sites/dev/www/wp-content/themes/utk_lib_wp_theme/resources/assets/react/panel';

rsync -av --delete dist/media ~/Sites/dev/www/wp-content/themes/utk_lib_wp_theme/resources/assets/react/panel
rsync -av --delete dist/panel.js ~/Sites/dev/www/wp-content/themes/utk_lib_wp_theme/resources/assets/react/panel
rsync -av --delete dist/panel.css ~/Sites/dev/www/wp-content/themes/utk_lib_wp_theme/resources/assets/react/panel

cd ~/Sites/dev/www/wp-content/themes/utk_lib_wp_theme/;
yarn build;
cd ~/Sites/react/utk_lib_panel

echo 'Shipped Complete';
