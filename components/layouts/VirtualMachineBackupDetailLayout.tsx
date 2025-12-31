import GetStartedCard from '../card/GetStartedCard'
import VMBackupFeatureSection from '../section/products/Storage/vm-backup-detail/VMBackupFeatureSection'
import VMBackupUseCaseSection from '../section/products/Storage/vm-backup-detail/VMBackupUseCaseSection'

export default function VirtualMachineBackupDetailLayout() {
  return (
    <section>
      {/* virtual router feature section */}
      <VMBackupFeatureSection />

      {/* virtual router use case section */}
      <VMBackupUseCaseSection />

      {/* get started card section */}
      <div className="max-w-7xl mx-auto pb-16 lg:pb-32 md:pb-32">
        <div className="mx-4 lg:mx-8 md:mx-8">
          <GetStartedCard />
        </div>
      </div>
    </section>
  )
}
