import Search from '../../components/search'

export default function ProfilePage() {
    return (
        <div className="flex flex-col items-center min-h-screen py-2.5">
            <Search />
            <div className="flex-1 w-full flex flex-col items-center justify-center"> 
                <img className="w-32 h-32 rounded-full mx-auto" src="https://picsum.photos/200" alt="Profile picture" />
                <h2 className="text-center text-2xl font-semibold mt-3">John Doe</h2>
                <ul className='py-2'>
                    <li><b>Favorite Book:</b> Harry Potter</li>
                    <li><b>Country:</b> America</li>
                    <li><b>Books Read from Wishlist:</b> 5</li>
                </ul>
                <div className="p-6">
                    <h3 className="text-xl font-semibold">Bio</h3>
                    <p className="text-gray-600 mt-2">
                        The number one thing I miss about my childhood is my expansive imagination, I could create
                        these magical worlds in my head. I could fight off robots, sail the mystical seas, and travel space.
                        The best way I can connect to my inner child is by reading, I get to escape in my imagination and create
                        infinitely large worlds. That is why I love reading. 
                    </p>
                </div>
            </div>
        </div>
    );
}