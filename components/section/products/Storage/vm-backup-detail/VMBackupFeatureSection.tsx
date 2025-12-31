import FeatureCardV2 from '@/components/card/FeatureCardV2';
import { ShieldCheck, Map, Clock, RefreshCw, Layers, UserCheck } from "lucide-react";

const features = [
  {
    title: "Full Instance Protection",
    desc: "Backs up the entire virtual machine, including the Root disk (OS), all attached Data disks, and VM metadata (CPU/RAM settings).",
    icon: ShieldCheck
  },
  {
    title: "Cross-Zone Disaster Recovery",
    desc: "Restore your VM backups into a completely different physical Zone (datacenter) to ensure continuity during regional outages.",
    icon: Map
  },
  {
    title: "SLA-Based Automation",
    desc: "Assign VMs to predefined Backup Offerings with automated schedules and specific retention policies like 'keep last 30 backups'.",
    icon: Clock
  },
  {
    title: "Application-Consistent Backups",
    desc: "Utilizes Quiesce operations via guest agents to freeze filesystems and flush dirty buffers to disk before the backup begins.",
    icon: RefreshCw
  },
  {
    title: "Multi-Provider Integration",
    desc: "Orchestrates backups through Veeam, Dell NetWorker, and native NAS plugins for NFS, CIFS, or Ceph storage.",
    icon: Layers
  },
  {
    title: "Self-Service Restoration",
    desc: "Independently restore a VM 'in-place' or 'Create New VM from Backup' directly from the intuitive user interface.",
    icon: UserCheck
  }
];

export default function VMBackupFeatureSection() {
    return (
        <section className='max-w-7xl mx-auto py-6 lg:py-12 md:py-12'>
            <div className="text-center pb-8 mx-4 lg:mx-8 md:mx-8">
                <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
                    Key Features
                </p>
                <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
                    Ensure business continuity with automated, off-site data protection for your mission-critical workloads.
                    Implement robust retention policies and secure encryption to protect your enterprise data from accidental loss or corruption.
                </p>
            </div>

            <div className='pb-8 mx-4 lg:mx-8 md:mx-8'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <div key={i} className='h-full'>
                            <FeatureCardV2 icon={f.icon} title={f.title} desc={f.desc} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
