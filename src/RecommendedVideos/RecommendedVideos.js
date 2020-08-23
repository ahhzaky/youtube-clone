import React from 'react';
import VideoCard from './VideoCard';
import './RecommendedVideos.css';

function RecommendedVideos() {
    return (        
           <div className="recommendedVideos">
              <h2>Recommended</h2>
              <div className="recommendedVideos__videos">
                  <VideoCard 
                    title="Weird Genius - Sweet Scar (ft. Prince Husein)"
                    views="58.1M Views"
                    timestamp="2 years ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJyhUWH0wx_MBMaRFYULMyAjwRHgoPiIuCgoiTmT=s88-c-k-c0x00ffffff-no-rj"
                    channel="Weird Genius"
                    image="https://i.ytimg.com/vi/dxIG9JtakBM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCGeCi6dYpgCdt1gmXJrijVQBxhTg"
                  />
                  <VideoCard 
                    title="Day in the Life of a Japanese Game Programmer"
                    views="7M Views"
                    timestamp="9 month ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJzjOc3SNgeA1kDmwPXpSht6n0QTEhZLSciF0W5NbQ=s100-c-k-c0xffffffff-no-rj-mo"
                    channel="Paolo fromTOKYO "
                    image="https://i.ytimg.com/vi/e_TxH59MclA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC-rAIrZojwq7TqBd5Ek_r_94SBZQ"
                  />
                  <VideoCard 
                    title="Channel Update - Taking a Break, Guest Creators"
                    views="103K Views"
                    timestamp="1 month ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GgcgHR-l77_lkWlrA3mU6xOkCZLB08l3b1oiw=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Traversy Media"
                    image="https://i.ytimg.com/vi/7_rz28FDpYM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCmJD5msmnDgHvpmByx1UsK2dD9iQ"
                  />
                  <VideoCard 
                    title="🔴 7 Most Popular JavaScript Libraries in 2020"
                    views="9.3K Views"
                    timestamp="1 month ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Clever Programmer"
                    image="https://i.ytimg.com/vi/NWOeM-1tgUI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAsWhPdHsDx_5ttXOuGBr0IdT9PTg"
                  />
                  <VideoCard 
                    title="Anne-Marie & Ed Sheeran – 2002 [Official Acoustic Video]"
                    views="83M Views"
                    timestamp="2 years ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJxQuKjkILwNh928PJPBTKEr9c2FNLBcflE5y78YSA=s88-c-k-c0x00ffffff-no-rj"
                    channel="Anne-Marie"
                    image="https://i.ytimg.com/vi/u3ePPA0yzSU/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA40JzJrL2r8V082XSRNqxOogAM6g"
                  />
                  <VideoCard 
                    title="React & Node Tutorial - Full ECommerce in 5 Hours [2020]"
                    views="190K Views"
                    timestamp="3 month ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GjivGa_ZhV0i2BNMkSpR1qZtlzL_cH23eoeyQ=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Coding with Basir"
                    image="https://i.ytimg.com/vi/Fy9SdZLBTOo/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB3UJOyozP7f5PMcVMT6jpYPdaYqg"
                  />
                  <VideoCard 
                    title="PERN Stack Mega Course: Postgres Express React Node 6.5Hrs!"
                    views="4.1K Views"
                    timestamp="1 month ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14Gi5EcVLrnyZ1-fUzJ5y47xgMv8U-_T_teBHCA=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Weird Genius"
                    image="https://i.ytimg.com/vi/7qAXvOFhlDc/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC7Uz6vCAsr8u2h09fW-z1UsG6cSw"
                  />
                  <VideoCard 
                    title="Build a Voice Recognition React News Application - Alan AI Voice Assistant"
                    views="23K Views"
                    timestamp="2 week ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GhsPMReHx0LFOV0t7dpA7IwtGf_rf6hErq6CA=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="JavaScript Mastery"
                    image="https://i.ytimg.com/vi/rqw3OftE5sA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDQLemWME87k6i_e1Qy9LGcMZJBqg"
                  />
                  <VideoCard 
                    title="🔴 Build a Zoom Clone with Node JS for Beginners"
                    views="104K Views"
                    timestamp="2 week ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Clever Programmer"
                    image="https://i.ytimg.com/vi/ZVznzY7EjuY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAAHmiSo1PUEJ1QQ0Otifpqfqo_hg"
                  />
              </div>
           </div>

    );
}

export default RecommendedVideos
