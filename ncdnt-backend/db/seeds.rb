# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
require 'securerandom'

Report.delete_all

report_collection = []

event_desc = [
   
"Maecenas mattis ligula at varius mattis. Aenean urna lectus, malesuada eu nibh vel, porttitor dictum elit. Vivamus fringilla augue lectus, non dapibus dui porttitor eu. Quisque enim ex, elementum id ultricies et, ultricies at massa. Pellentesque elementum mollis est, quis dictum ipsum tristique et. Curabitur ipsum turpis, condimentum sit amet mattis ut, sollicitudin ac ipsum. Maecenas nec scelerisque diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque libero tellus, condimentum eget iaculis et, pellentesque ultrices est.",

"Mauris quis leo libero. Vestibulum eleifend pretium pharetra. Aliquam ex sem, imperdiet et purus egestas, semper feugiat orci. Nam mollis vehicula rutrum. Nullam cursus ligula vestibulum mi commodo, nec fermentum tortor scelerisque. Cras hendrerit, sem nec tristique molestie, nulla neque congue mi, id condimentum orci neque in lacus. Quisque vehicula dapibus lectus sodales aliquam. Proin malesuada pretium enim, non hendrerit tellus porttitor vitae. Duis vitae vulputate nulla. Integer in dui sed neque pharetra scelerisque in in leo. Suspendisse a risus posuere, sodales tellus eget, dignissim sem. Nulla nunc est, mattis lobortis elementum ut, dapibus at lorem. Aliquam non massa gravida, posuere felis nec, semper est. Nullam tortor elit, commodo sit amet fringilla in, porttitor vitae nisi.",

"Etiam ac nulla ante. Suspendisse luctus, urna nec fermentum dignissim, nulla mi interdum quam, interdum sagittis nunc tellus quis ligula. Fusce a iaculis tellus. Vivamus eleifend dui id hendrerit placerat. Proin lacinia diam ac lorem fermentum aliquam. Pellentesque vehicula quis dui ut egestas. Sed dictum porttitor sapien, gravida dignissim turpis blandit at. Aliquam ornare erat ut ipsum porta, eu volutpat ligula sodales. Suspendisse potenti. Suspendisse quis libero purus.",

"Morbi vitae tempor libero. Vestibulum eget lectus varius justo ultricies euismod. Aenean eget consectetur quam. Aenean finibus quam vitae libero laoreet varius. Sed ligula elit, accumsan ac nisl eu, varius finibus nunc. Morbi luctus orci volutpat nibh aliquet bibendum at ac risus. Sed id augue dignissim, pharetra purus non, interdum ipsum. Donec tempor consectetur eleifend. Aliquam efficitur lacinia sem nec dapibus. Cras sit amet cursus lectus, id venenatis felis. Curabitur commodo facilisis nulla, sed tempus ante scelerisque non. Vestibulum malesuada at turpis bibendum sagittis.",

"Fusce felis nulla, vulputate sed odio et, dignissim vehicula magna. Suspendisse in ex leo. Proin accumsan aliquet nibh sit amet cursus. Duis consequat tortor ut consectetur malesuada. Sed pharetra, neque et varius posuere, massa dui euismod justo, ac egestas nisi enim non urna. Fusce suscipit fermentum malesuada. Ut molestie ante at aliquet dignissim. Mauris urna nisl, suscipit et erat a, dictum pellentesque enim. Aliquam congue est turpis. Nunc malesuada magna ultrices mollis placerat. Donec varius vel mi ut mollis. In ac velit et arcu varius congue.",

"Sed enim ex, fringilla a nisi elementum, faucibus varius urna. Phasellus ornare nibh eros, ac pharetra lacus maximus non. Curabitur accumsan eleifend est, et rhoncus tellus sagittis at. Phasellus eget varius turpis. Vestibulum convallis velit eget suscipit dapibus. Suspendisse posuere gravida eros quis finibus. Sed convallis porta pulvinar. Pellentesque volutpat felis sapien."

]


event_desc.each do |desc|
    params = { report: { event_desc: desc, suspect_desc: desc, comments_attributes: [comment_text: desc], location_attributes: { lat: 10, lng:10 }, images_attributes: [image_link: "https://i.imgur.com/vgBpFWM.png", image_checksum: "120EA8A25E5D487BF68B5F7096440019"]} }
    report = Report.new(params[:report])
    report.save!
end


# report = Report.new(params[:report])
# report.location = Location.new(params[:location_attributes])
# report.save
# comment = Comment.new(params[:comment_attributes])

# comment.save

#     image = Image.new(image_data)

#     image.save
# end

# report
# Report.new(report: { event_desc: "desc", suspect_desc: "desc", comments_attributes: [comment_text: "desc"], location_attributes: { lat: 10, lng:10 }, images_attributes: [image_link: "https://www.imgur.com/example_link", image_checksum: "120EA8A25E5D487BF68B5F7096440019"]})