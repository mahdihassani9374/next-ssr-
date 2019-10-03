import ReactWOW from 'react-wow';

function Gallery() {
    const gallery =[
        '../../static/images/9.jpg',
        '../../static/images/profile.jpg',
        '../../static/images/profile1.jpg',
        '../../static/images/profile2.jpg',
        // '../../static/images/4.jpg',
        '../../static/images/5.jpg',
        '../../static/images/6.jpg',
        '../../static/images/7.jpg',
        '../../static/images/11.jpg',
        '../../static/images/12.jpg',
        '../../static/images/10.jpg',
        // '../../static/images/8.JPG'
    ]
    return (
        <div className="container">
            <div className="row gallery">
                {
                    gallery.map((item,index)=>
                        <ReactWOW animation='zoomIn'  key={index}>
                              <div className="col-md-3 col-xs-6 col-sm-3">
                                <img src={item} className="img-responsive img-thumbnail img-gallery" alt="مهدی و مبین حسنی " />
                            </div>
                        </ReactWOW>                      
                    )
                }
            </div>
        </div>
    )
}

export default Gallery