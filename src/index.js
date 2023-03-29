// write your code here!
document.addEventListener("DOMContentLoaded", () => {
    const par = document.getElementById('duck-nav');

    const img1 = document.createElement('img');
    img1.src = 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/246/9133/Computer-Geek-Rubber-Duck-Schanables-3__49617.1644583506.jpg?c=2'; 
    par.appendChild(img1);

    const img2 = document.createElement('img');
    img2.src = "https://m.media-amazon.com/images/I/51NG84N1jrL._AC_SS450_.jpg";
    par.appendChild(img2);

    const img3 = document.createElement('img');
    img3.src = "https://www.essexduck.com/uploads/1/3/2/0/132064494/s101382617522703170_p335_i1_w500.jpeg";
    par.appendChild(img3);

    const img4 = document.createElement('img');
    img4.src = "https://res.cloudinary.com/teepublic/image/private/s--qPJEf-Tj--/c_crop,x_10,y_10/c_fit,w_1109/c_crop,g_north_west,h_1260,w_1260,x_-112,y_-76/co_rgb:0f0f0f,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1260,w_1260/fl_layer_apply,g_north_west,x_-112,y_-76/bo_157px_solid_white/e_overlay,fl_layer_apply,h_1260,l_Misc:Art%20Print%20Bumpmap,w_1260/e_shadow,x_6,y_6/c_limit,h_1134,w_1134/c_lpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1627667803/production/designs/23373019_0.jpg";
    par.appendChild(img4);

    const img5 = document.createElement('img');
    img5.src = "https://amsterdamduckstore.com/wp-content/uploads/2015/08/spidy-rubber-duck-leaning.jpg";
    par.appendChild(img5)
});

document.getElementById("duck-display-name").onclick = function() {myfunction()};


