import React from 'react'
import SearchSection from './components/SearchSection/SearchSection'
import PopularCategories from './components/PopularCategories/PopularCategories'
import JobHuntResume from './components/JobHuntResume/JobHuntResume'
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs'
import { HappyCandidates } from './components/HappyCandidates/HappyCandidates'
const HomePage = () => {
    return (
        <div>
                <SearchSection />
                <PopularCategories />
                <JobHuntResume />
                <FeaturedJobs/>
                <HappyCandidates/>
        </div>
    )
}
export { HomePage }