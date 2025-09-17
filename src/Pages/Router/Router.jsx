// @ts-nocheck
import { Route,Routes,useLocation } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';
import CallFlow from '../ReactFlow/CallFlow';

export default function Router() {
    const location = useLocation(); // useLocation gives current URL path
    const path = location.pathname.replace('/',''); // remove leading '/'

    return (
        <>
            {path === 'callflow' ? (
                <CallFlow />
            ) : (
                <>
                    <Header />
                    <div className="grid grid-cols-12 gap-4 mx-auto px-[5rem] mt-[150px]">
                        <div className="col-span-12 md:col-span-4 bg-[#9C998E] shadow-2xl text-white p-8 rounded h-[65vh]">
                            <Sidebar />
                        </div>
                        <div className="col-span-12 md:col-span-8 bg-[#9C998E] shadow-2xl text-white p-8 rounded h-[65vh] overflow-hidden">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/project" element={<Portfolio />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/resume" element={<Resume />} />
                            </Routes>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
