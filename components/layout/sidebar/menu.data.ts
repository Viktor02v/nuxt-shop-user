export interface MenuData {
	name:string,
	icon:string,
	url:string,
}

export const MENU_DATA:MenuData[] = [
	{
		name:'Home',
		icon:'radix-icons:dashboard',
		url:'/',
	},
	{
		name:'Products',
		icon:'fluent:receipt-28-regular',
		url:'/products',
	},
	{
		icon: 'line-md:heart',
		name:'Favorites',
		url:'/favorites'
	},
	{
		icon: 'solar:cart-linear',
		name:'Cart',
		url:'/cart'
	},
	{
		name:'Orders',
		icon:'ep:goods',
		url:'/orders',
	},
	{
		name:'Payments',
		icon:'ph:contactless-payment',
		url:'/payments',
	},
	{
		icon: 'radix-icons:gear',
		name:'Settings',
		url:'/settings'
	},
	{
		icon: 'radix-icons:question-mark',
		name:'Help center',
		url:'/help'
	}
]