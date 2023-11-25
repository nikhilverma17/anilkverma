import React from "react";
import team1 from "../../assets/team1.jpg"
import team2 from "../../assets/team2.jpg"
import team3 from "../../assets/team3.jpg"
import team4 from "../../assets/team4.jpg"

const MyTeam = () => {
    return (
        <div id="Myteam" className="w-full min-h-screen p-2 flex items-center bg-red-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">My Team</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        "Meet the talented individuals who power our vision and drive our success."
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-12">
                    <div className="flex flex-col items-center text-center ">
                        <div className="w-64 h-64 overflow-hidden rounded-full shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="w-64 h-64 object-cover"
                                src={team1}
                                alt="Client 1"
                            />
                        </div>
                        <div className="z-10 p-8 rounded-lg text-lg text-gray-700 mb-4">
                            <h1 className="text-2xl font-bold text-gray-900">Adesh Kumar</h1>
                            <p className="text-2xl text-gray-900">Lucknow</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-64 h-64 overflow-hidden rounded-full shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="w-64 h-64 object-cover"
                                src={team2}
                                alt="Client 4"
                            />
                        </div>
                        <div className="z-10 p-8 rounded-lg text-lg text-gray-700 mb-4">
                            <h1 className="text-2xl font-bold text-gray-900">Bramhadeen</h1>
                            <p className="text-2xl text-gray-900">Palia</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-64 h-64 overflow-hidden rounded-full shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="w-64 h-64 object-cover"
                                src={team1}
                                alt="Client 5"
                            />
                        </div>
                        <div className="z-10 p-8 rounded-lg text-lg text-gray-700 mb-4">
                            <h1 className="text-2xl font-bold text-gray-900">Chandrika Prasad</h1>
                            <p className="text-2xl text-gray-900">Biswa</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-64 h-64 overflow-hidden rounded-full shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="w-64 h-64 object-cover"
                                src={team3}
                                alt="Client 5"
                            />
                        </div>
                        <div className="z-10 p-8 rounded-lg text-lg text-gray-700 mb-4">
                            <h1 className="text-2xl font-bold text-gray-900">Kailasho</h1>
                            <p className="text-2xl text-gray-900">Palia</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-64 h-64 overflow-hidden rounded-full shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="w-64 h-64 object-cover"
                                src={team1}
                                alt="Client 5"
                            />
                        </div>
                        <div className="z-10 p-8 rounded-lg text-lg text-gray-700 mb-4">
                            <h1 className="text-2xl font-bold text-gray-900">Prem Kishore Rana</h1>
                            <p className="text-2xl text-gray-900">Palia</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-64 h-64 overflow-hidden rounded-full shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="w-64 h-64 object-cover"
                                src={team2}
                                alt="Client 5"
                            />
                        </div>
                        <div className="z-10 p-8 rounded-lg text-lg text-gray-700 mb-4">
                            <h1 className="text-2xl font-bold text-gray-900">Sanooph Kumar</h1>
                            <p className="text-2xl text-gray-900">Palia</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-64 h-64 overflow-hidden rounded-full shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="w-64 h-64 object-cover"
                                src={team4}
                                alt="Client 5"
                            />
                        </div>
                        <div className="z-10 p-8 rounded-lg text-lg text-gray-700 mb-4">
                            <h1 className="text-2xl font-bold text-gray-900">Ramvati</h1>
                            <p className="text-2xl text-gray-900">Palia</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-64 h-64 overflow-hidden rounded-full shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="w-64 h-64 object-cover"
                                src={team2}
                                alt="Client 5"
                            />
                        </div>
                        <div className="z-10 p-8 rounded-lg text-lg text-gray-700 mb-4">
                            <h1 className="text-2xl font-bold text-gray-900">Rahul Shakya</h1>
                            <p className="text-2xl text-gray-900">Palia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTeam;
