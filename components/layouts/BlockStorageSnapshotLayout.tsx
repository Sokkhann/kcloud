"use client";
import GetStartedCard from "../card/GetStartedCard";
import BlockStorageSnapshotFeatureSection from "../section/products/Storage/storage-snapshot-detail/BlockStorageSnapshotFeatureSection";
import BlockStorageSnapshotUseCaseSection from "../section/products/Storage/storage-snapshot-detail/BlockStorageSnapshotUseCaseSection";

export default function SnapshotLayout() {

  return (
    <div className=" bg-gray-100">
      {/* block storage snapshot feature section */}
      <BlockStorageSnapshotFeatureSection/>

      {/* block storage snapshot use case section */}
      <BlockStorageSnapshotUseCaseSection/>

      {/* get started card section */}
      <div className="max-w-7xl mx-auto py-6 lg:py-12 md:py-12">
        <div className="mx-4 lg:mx-8 md:mx-8">
          <GetStartedCard />
        </div>
      </div>
    </div>
  );
}
