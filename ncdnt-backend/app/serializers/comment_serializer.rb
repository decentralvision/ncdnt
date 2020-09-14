class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :comment_text, :report_id, :created_at
  belongs_to :report
end
