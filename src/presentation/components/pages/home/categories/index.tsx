import { motion } from 'framer-motion';

import { ICategory } from '@/domain/category/entities';
import { Link } from '@/presentation/components/ui/Link';
import { Section } from '@/presentation/components/core/Section';

interface ICategories {
  categories: Array<ICategory>;
}

const Categories: React.FC<ICategories> = ({ categories }) => (
  <Section title="Categorias">
    {categories.map(content => (
      <Link
        key={content.id}
        href={`/categoria/${content.slug}`}
        noDecoration
      >
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="box-border duration-300 transition-colors flex w-fit h-fit py-4 px-8 rounded-lg text-white1000 bg-black1000 hover:border-black1000 border-[1px] hover:bg-white hover:text-black1000"
        >
          <p className="font-semibold uppercase">{content.name}</p>
        </motion.div>
      </Link>
    ))}
  </Section>
);

export { Categories };
