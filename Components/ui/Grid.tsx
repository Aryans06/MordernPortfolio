
import { gridItems } from '@/data'
import { BentoGrid, BentoGridItem } from './BentoGrid'

const Grid = () => {
  return (
    <section id='about'>
    <BentoGrid>
        {gridItems.map(({id,title,description,img,imgClassName,titleClassName,spareImg,className})=>(
           <BentoGridItem
             id={id}
             key={id}
             title={title}
             description={description}
             className={className}
             img={img}
             imgClassName={imgClassName}
             titleClassName={titleClassName}
             spareImg={spareImg}
           />
            ))}
    </BentoGrid>
    </section>
  )
}

export default Grid
