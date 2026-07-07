"use client";

import React from "react";

interface SkeletonProps {
  className?: string;
  circle?: boolean;
}

export function Skeleton({ className = "", circle = false }: SkeletonProps) {
  return (
    <div
      className={`skeleton ${circle ? "skeleton-circle" : ""} ${className}`}
    />
  );
}

export function CourseCardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden border border-[rgba(26,26,36,0.08)] bg-white/80">
      <Skeleton className="h-44 w-full rounded-none" />
      <div className="p-5 space-y-3">
        <Skeleton className="h-3 w-20 rounded-full" />
        <Skeleton className="h-5 w-full rounded" />
        <Skeleton className="h-4 w-3/4 rounded" />
        <div className="flex gap-2 pt-1">
          <Skeleton className="h-3 w-16 rounded-full" />
          <Skeleton className="h-3 w-16 rounded-full" />
        </div>
        <div className="flex justify-between items-center pt-2">
          <Skeleton className="h-6 w-16 rounded" />
          <Skeleton className="h-8 w-24 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export function TutorCardSkeleton() {
  return (
    <div className="w-[240px] flex-shrink-0 rounded-2xl overflow-hidden border border-[rgba(26,26,36,0.08)] bg-white/80">
      <Skeleton className="h-44 w-full rounded-none" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-3 w-20 rounded-full" />
        <Skeleton className="h-4 w-32 rounded" />
        <Skeleton className="h-3 w-24 rounded" />
        <div className="flex justify-between pt-1">
          <Skeleton className="h-3 w-16 rounded-full" />
          <Skeleton className="h-3 w-12 rounded" />
        </div>
      </div>
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden border border-[rgba(26,26,36,0.08)] bg-white/80">
      <Skeleton className="h-48 w-full rounded-none" />
      <div className="p-5 space-y-3">
        <Skeleton className="h-3 w-16 rounded-full" />
        <Skeleton className="h-5 w-full rounded" />
        <Skeleton className="h-4 w-4/5 rounded" />
        <Skeleton className="h-4 w-3/5 rounded" />
        <div className="flex items-center gap-3 pt-2">
          <Skeleton circle className="h-8 w-8" />
          <Skeleton className="h-3 w-24 rounded" />
        </div>
      </div>
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div className="space-y-6">
      <div className="h-40 rounded-2xl overflow-hidden">
        <Skeleton className="h-full w-full rounded-none" />
      </div>
      <div className="flex items-end gap-4 -mt-12 px-6">
        <Skeleton circle className="h-24 w-24 border-4 border-white" />
        <div className="flex-1 space-y-2 pb-2">
          <Skeleton className="h-6 w-40 rounded" />
          <Skeleton className="h-4 w-24 rounded" />
        </div>
      </div>
      <div className="px-6 space-y-3">
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-3/4 rounded" />
      </div>
    </div>
  );
}

export default Skeleton;
