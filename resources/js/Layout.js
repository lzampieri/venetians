
export default function Layout( { children } ) {
    return (
        <div className="
            w-full min-h-screen
            flex flex-col justify-center items-center
            bg-fixed bg-center bg-no-repeat bg-cover
            whitespace-pre-line
            "
            style={{ backgroundImage: 'url(' + route( 'getBackground' ) + ')' }}>
            { children }
            <div className="absolute top-0 right-0">
                <a href={ route('auth') }>Login</a>
            </div>
        </div>
    )
}