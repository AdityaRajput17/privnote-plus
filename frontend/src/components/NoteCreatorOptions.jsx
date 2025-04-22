import React, {useEffect, useState} from 'react'

const NoteCreatorOptions = ({getData}) => {
    const [optionData, setOptionData] = useState({
        password: "",
        cpassword: "",
        expiry: "after",
        DontWarn: false,
    })

    useEffect(() => {
        getData(optionData)
    }, [optionData])

    return (
        <div className="space-y-6 p-4 sm:p-6 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <input 
                        type="password"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Password"
                        value={optionData.password}
                        onChange={(e) => setOptionData({...optionData, password: e.target.value})}
                    />
                </div>
                <div>
                    <input 
                        type="password"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Confirm password"
                        value={optionData.cpassword}
                        onChange={(e) => setOptionData({...optionData, cpassword: e.target.value})}
                    />
                </div>
            </div>

            <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-700">Note self-destructs after:</label>
                <select 
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white appearance-none cursor-pointer
                    hover:border-gray-300 transition-colors duration-200 ease-in-out
                    sm:text-base text-sm"
                    onChange={(e) => setOptionData({...optionData, expiry: e.target.value})}
                >
                    <option value="after">After reading</option>
                    <option value="1h">1 hour</option>
                    <option value="24h">24 hours</option>
                    <option value="7d">7 days</option>
                    <option value="30d">30 days</option>
                </select>
            </div>

            {/* <div className="flex items-center space-x-3">
                <input 
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    onChange={(e) => setOptionData({...optionData, DontWarn: e.target.checked})}
                />
                <label className="text-sm text-gray-700">
                    Do not warn before showing and destroying the note
                </label>
            </div> */}
        </div>
    )
}

export default NoteCreatorOptions
