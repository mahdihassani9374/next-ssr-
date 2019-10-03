import ReactWOW from 'react-wow';

function ProjectItem() {
   const projects =[
        { name: 'آلتین سی ان سی (altin cnc)', img: '../../static/images/altin.png' ,link:'http://altincnc.com' },
        { name: 'هیوا پرواز (درحال پیاده سازی)', img: '../../static/images/hyva.png' ,link:'http://hyva.ferdows110.ir' },
        { name: 'آستان قدس رضوی منطقه ۱۸ تهران', img: '../../static/images/kannon.png' ,link:'http://kanoon.ferdows110.ir' },
        { name: 'اکانت گیم', img: '../../static/images/project4.png' ,link:'http://accountgame.ir'},           
        { name: 'هیئت قائمیون', img: '../../static/images/project2.png'  ,link:'http://ferdows110.ir'},
        { name: 'صراط وکتور', img: '../../static/images/project3.png' ,link:'http://seratvector.ir' },
        { name: 'تهران گرافیک', img: '../../static/images/project3.png' ,link:'http://tehran-graphic.ir' },
        { name: 'ایمن صنعت پارسیان', img: '../../static/images/project1.png' ,link:'http://imensanaateparsian.ir' },                       
    ]
    const android = [
        {name:'اپلیکیشن هیئت قائمیون'  , img:['../../static/images/application.png',
    '../../static/images/application1.png','../../static/images/application2.png'] , link:'http://s9.picofile.com/file/8366729968/qaemioun_app.apk.html'}
    ]
    return (
        <section className="section">
            <div className="">
                <div className="container">
                    <ReactWOW animation='zoomIn'>
                        <div className="section__title">پروژه ها</div>
                    </ReactWOW>
                    <ReactWOW animation='zoomIn'>
                        <div className="section__subtitle">پروژه های انجام شده ما تحت وب</div>
                    </ReactWOW>
                    <ReactWOW animation='zoomIn'>
                        <div className="section__desc">
                            در این قسمت می توانید نمونه کارهای تحب وب مارا مشاهده کنید
                            </div>
                    </ReactWOW>
                    <div className="mt-80 mb-40 flex">
                        {
                            projects.map((item, index) =>
                                <ReactWOW animation='zoomIn' key={index}>
                                    <div className="col-md-4 col-sm-6 col-xs-12">
                                        <a target='_blank' href={item.link} className="link">
                                            <div className="section__box p-0 pulse-hover">
                                                <div className="text-center">
                                                    <img src={item.img} className="img-responsive" alt={item.name} style={{ borderBottom: '1px solid #ccc' }} />
                                                    <div className="padding-10">
                                                        {
                                                            item.name
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </ReactWOW>
                            )
                        }
                    </div>
                    <ReactWOW animation='zoomIn'>
                        <div className="section__subtitle">پروژه های انجام شده اندرویدی (اپلیکیشن) </div>
                    </ReactWOW>
                    <ReactWOW animation='zoomIn'>
                        <div className="section__desc">
                            در این قسمت می توانید نمونه کارهای تحب اندروید  مارا مشاهده کنید
                            </div>
                    </ReactWOW>
                    <div className="mt-80 mb-40 flex">
                        {
                            android.map((item, index) =>
                                <ReactWOW animation='' key={index}>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <a target='_blank' href={item.link} className="link">
                                            <div className="p-0 pulse-hover">
                                                <div className="text-center">
                                                    {
                                                        item.img.map((img, ind) =>
                                                            <img src={img} key={ind} className="img-app" alt={item.name} />
                                                        )
                                                    }
                                                </div>
                                            </div>
                                            <div className="padding-10 text-center margin-top-20">
                                                {
                                                    item.name
                                                }
                                            </div>
                                        </a>
                                    </div>
                                </ReactWOW>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectItem