'use client'
import Image from "next/image"

const NewsCard = ({
    isBanner = false,
    containerClasses = '',
    news = {
        title : 'Pitch termsheet backing validation focus release.',
        avatar : {
            name: 'Chandler Bing',
            image: '/img/avatar_female_1.png'
        },
        createdAt: 'November 22, 2021',
        bannerImage: '/img/header_image.png',
        category: 'Category'
    }
}) => {
    return (
        <div className={`flex ${isBanner ? 'flex-row justify-between w-full' : 'flex-col'} items-center my-2 gap-8 flex-wrap ${containerClasses}`}>
            <div className={`max-w-max mx-auto xl:m-0 ${!isBanner ? 'h-[210px] overflow-hidden' : ''}`}>
                <Image
                    alt="post image"
                    height={isBanner ? 386 : 210}
                    width={isBanner ? 550 : 300}
                    src={news.bannerImage}
                />
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-3 flex-wrap">
                    <h6 className="text-base font-bold text-blue-850">{news.category}</h6>
                    <p className="text-gray-850">
                       {news.createdAt} 
                    </p>
                </div>
                <div className={`${!isBanner ? 'xs:h-20' : ' max-w-xl'}`}>
                    <p className={`
                        ${isBanner ? 
                            'text-3xl lg:max-h-[6.8rem] lg:text-[3rem] lg:leading-[3.4rem] lg:line-clamp-2 text-ellipsis' 
                            : 'max-h-[6rem] text-[1.25rem] leading-[2rem] line-clamp-3 text-ellipsis'
                        } newscard-title`}
                    >
                        {news.title}
                    </p>
                </div>
                <div className="flex gap-3 items-center pt-4 xs:pt-8">
                    <Image 
                        alt="avatar"
                        height={32}
                        width={32}
                        src={news.avatar.image}
                    />
                    <p>
                        {news.avatar.name}
                    </p>
                </div>
            </div>
        </div>
    )
}


export default NewsCard

