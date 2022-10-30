
export default function Layout( { children } ) {
    return (
        <div className="
            w-full min-h-screen
            flex flex-col justify-center items-center
            bg-fixed bg-center bg-no-repeat bg-cover
            "
            style={{ backgroundImage: 'url(' + route( 'getBackground' ) + ')' }}>
            { children }
        </div>
    )
}