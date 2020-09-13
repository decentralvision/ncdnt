class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :comment_text
  belongs_to :report
end
