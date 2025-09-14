
export function MenuIcon({ className = "" }: {className: string}) {
    return (
        <span className={`cursor-pointer ${className}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#248aeb"
                strokeWidth={0.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu-icon lucide-menu"
            >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
            </svg>
        </span>
    );
}

export function UserIcon({ w, h, className = "" }: {className?: string, w: string, h: string}) {
    return (
        <span className={`cursor-pointer ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 24 24" fill="none" stroke="#248aeb" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </span>
    )
}

export function CartIcon({ w, h, className = "" }: {className?: string, w: string, h: string}) {
    return (
        <span className={`cursor-pointer ${className}`}>
       <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 24 24" fill="none" stroke="#248aeb" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        </span>
    )
}