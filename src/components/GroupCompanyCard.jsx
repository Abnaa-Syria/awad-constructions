import { Card, CardContent } from '@/components/ui/card'

function GroupCompanyCard({ index, name, activity, summary }) {
  return (
    <Card className="group-company-card">
      <CardContent className="group-company-content">
        <div className="group-company-head">
          <span className="group-company-index" aria-label={`رقم ${index}`}>
            {index}
          </span>
          <span className="group-company-activity">{activity}</span>
        </div>
        <h3 className="group-company-title">{name}</h3>
        <p className="group-company-summary">{summary}</p>
      </CardContent>
    </Card>
  )
}

export default GroupCompanyCard
