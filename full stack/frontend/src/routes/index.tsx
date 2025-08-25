import { Route, Routes } from "react-router"
import { AddReview, Home, RecentReview, ReviewList } from "../pages"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recent-review" element={<RecentReview />} />
            <Route path="/add-review" element={<AddReview />} />
            <Route path="/review-list" element={<ReviewList />} />
        </Routes>
    )
}

export default AppRoutes