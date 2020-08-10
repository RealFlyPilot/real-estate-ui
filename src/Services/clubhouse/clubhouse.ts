// @ts-nocheck

import Clubhouse from 'clubhouse-lib'
export type ID = string | number

export interface Entity {
  id: ID
  created_at: string
  updated_at: string
}
export type Label = {
  archived: boolean
  color: string | null
  created_at: string | null
  description: string | null
  entity_type: string
  external_id: string | null
  id: number
  name: string
  stats: LabelStats
  updated_at: string | null
}

export type LabelStats = {
  num_epics: number
  num_points_completed: number
  num_points_in_progress: number
  num_points_total: number
  num_stories_completed: number
  num_stories_in_progress: number
  num_stories_total: number
  num_stories_unestimated: number
}
export type StoryType = 'bug' | 'chore' | 'feature'

export type T_TicketParams = {
  after_id?: ID
  archived?: boolean
  before_id?: ID
  branch_ids?: Array<ID>
  created_at?: string | null
  deadline?: string | null
  description?: string
  epic_id?: number | null
  estimate?: number | null
  external_id?: string
  file_ids?: Array<ID>
  follower_ids?: Array<ID>
  iteration_id?: number
  labels?: Array<Label>
  linked_file_ids?: Array<ID>
  name?: string
  owner_ids?: Array<ID>
  project_id?: number
  requested_by_id?: ID
  story_type?: StoryType
  updated_at?: string | null
  workflow_state_id?: number
}

export const ClubhouseClient: any = Clubhouse.create(
  process.env.REACT_APP_CLUBHOUSE_TOKEN
)
