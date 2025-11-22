import semaglutide5mg from '@/assets/products/semaglutide-5mg.png';
import semaglutide10mg from '@/assets/products/semaglutide-10mg.png';
import tirzepatide10mg from '@/assets/products/tirzepatide-10mg.png';
import tirzepatide15mg from '@/assets/products/tirzepatide-15mg.png';
import retatrutide10mg from '@/assets/products/retatrutide-10mg.png';
import aod96045mg from '@/assets/products/aod9604-5mg.png';
import tesamorelin5mg from '@/assets/products/tesamorelin-5mg.png';
import cjc12955mg from '@/assets/products/cjc1295-5mg.png';
import ipamorelin5mg from '@/assets/products/ipamorelin-5mg.png';
import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  {
    id: 'sem-5',
    name: 'Semaglutide 5mg',
    price: 149.99,
    image: semaglutide5mg,
    description: 'GLP-1 receptor agonist for weight management and appetite control',
    category: 'GLP-1',
  },
  {
    id: 'sem-10',
    name: 'Semaglutide 10mg',
    price: 279.99,
    image: semaglutide10mg,
    description: 'Higher dose GLP-1 agonist for enhanced weight loss results',
    category: 'GLP-1',
  },
  {
    id: 'tirz-10',
    name: 'Tirzepatide 10mg',
    price: 189.99,
    image: tirzepatide10mg,
    description: 'Dual GLP-1/GIP receptor agonist for superior fat loss',
    category: 'GLP-1',
  },
  {
    id: 'tirz-15',
    name: 'Tirzepatide 15mg',
    price: 269.99,
    image: tirzepatide15mg,
    description: 'Maximum strength dual agonist peptide therapy',
    category: 'GLP-1',
  },
  {
    id: 'ret-10',
    name: 'Retatrutide 10mg',
    price: 329.99,
    image: retatrutide10mg,
    description: 'Next-generation triple receptor agonist for optimal results',
    category: 'GLP-1',
  },
  {
    id: 'aod-5',
    name: 'AOD-9604 5mg',
    price: 119.99,
    image: aod96045mg,
    description: 'Fragment peptide for targeted fat oxidation and metabolism',
    category: 'Fat Loss',
  },
  {
    id: 'tes-5',
    name: 'Tesamorelin 5mg',
    price: 139.99,
    image: tesamorelin5mg,
    description: 'Growth hormone releasing peptide for visceral fat reduction',
    category: 'Growth Hormone',
  },
  {
    id: 'cjc-5',
    name: 'CJC-1295 5mg',
    price: 109.99,
    image: cjc12955mg,
    description: 'Long-acting GHRH analog for sustained GH elevation',
    category: 'Growth Hormone',
  },
  {
    id: 'ipa-5',
    name: 'Ipamorelin 5mg',
    price: 99.99,
    image: ipamorelin5mg,
    description: 'Selective growth hormone secretagogue for lean mass',
    category: 'Growth Hormone',
  },
];
