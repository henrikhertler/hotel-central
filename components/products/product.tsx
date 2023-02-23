import { Price, ProductWithPrice } from '../../types';
import cn from 'classnames';
import Button from '@/components/ui/Button';

interface ProductProps {
	product: ProductWithPrice;
	billingInterval: any;
	subscription: any;
	isLoading: boolean;
	priceIdLoading: string | undefined;
	handleCheckout: (price: any) => void;
}

export default function Product(props: ProductProps) {
	const { product, billingInterval, subscription, isLoading, priceIdLoading, handleCheckout } = props;

	const price: Price | undefined = product?.prices?.find(
		(price: any) => price.interval === billingInterval
	);
	if (!price) return null;
	const priceString = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: price.currency,
		minimumFractionDigits: 0
	}).format((price?.unit_amount || 0) / 100);
	return (
		<div
			key={product.id}
			className={cn(
				'rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900',
				{
					'border border-pink-500': subscription
						? product.name === subscription?.prices?.products?.name
						: product.name === 'Freelancer'
				}
			)}
		>
			<div className='p-6'>
				<h2 className='text-2xl leading-6 font-semibold text-white'>
					{product.name}
				</h2>
				<p className='mt-4 text-zinc-300'>{product.description}</p>
				<p className='mt-8'>
					<span className='text-5xl font-extrabold white'>
					  {priceString}
					</span>
					<span className='text-base font-medium text-zinc-100'>
					  /{billingInterval}
					</span>
				</p>
				<Button
					variant='slim'
					type='button'
					disabled={isLoading}
					loading={priceIdLoading === price.id}
					onClick={() => handleCheckout(price)}
					className='mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-900'
				>
					{product.name === subscription?.prices?.products?.name
						? 'Manage'
						: 'Subscribe'}
				</Button>
			</div>
		</div>
	);
}