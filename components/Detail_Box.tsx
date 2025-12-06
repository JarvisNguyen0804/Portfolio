interface Detail_Box_Props {
    date: string;
    title: string;
    company: string;
    location: string;
    detail: string[];
    skill: string[];
}


export default function Detail_Box({ date, title, company, location, detail, skill }: Detail_Box_Props) {
    return (
        <div className="flex pb-12">
            <section className="w-[27%] text-sm text-gray-300 pt-1">
                {date}
            </section>

            <section className="w-[73%] flex-1 pl-2">
                <div>
                    <div className="text-lg">
                        {title} {company}
                    </div>
                        
                    
                    <div>
                        <ul className="list-disc pl-6 space-y-1 text-slate-300/70">
                            {detail.map((detail_x) => (
                                <li key={detail_x}>{detail_x}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="flex flex-wrap gap-2 pt-6 ">
                            {skill.map((skill_x) => (
                                <span
                                    key={skill_x}
                                    className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 text-sm font-medium"
                                >
                                    {skill_x}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
