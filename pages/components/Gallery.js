import ReactWOW from 'react-wow';

function Gallery() {
    const gallery =[
        '../../static/images/9.png',
        '../../static/images/profile.png',
        '../../static/images/profile1.png',
        '../../static/images/profile2.png',
        '../../static/images/6.png',
        '../../static/images/3.JPG',
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