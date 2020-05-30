echo 'Shipping React Build to...';
echo '~/Sites/dev/utk-libraries/wp-content/themes/utk_lib_wp_theme/resources/assets/react/panel';

rsync -av --delete dist/ ~/Sites/dev/utk-libraries/wp-content/themes/utk_lib_wp_theme/resources/assets/react/panel

cd ~/Sites/dev/utk-libraries/wp-content/themes/utk_lib_wp_theme/;
yarn build;
cd ~/Sites/react/utk_lib_panel

echo 'Shipped Complete';
