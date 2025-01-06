import { Clock, Check, X, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface DataItem {
  id: number;
  user: {
    name: string;
    avatar: string;
    image: string;
  };
  description: string;
  time: string;
  status: 'approved' | 'rejected';
  budget: string;
}

const data: DataItem[] = [
  {
    id: 1,
    user: {
      name: 'John Smith',
      avatar: 'JS',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952',
    },
    description: 'The Role of Social Media in College Decision-Mak...',
    time: '04:00 AM',
    status: 'approved',
    budget: '$500',
  },
  {
    id: 2,
    user: {
      name: 'John Smith',
      avatar: 'JS',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    },
    description: 'Impact of Social Media Marketing on College Enroll...',
    time: '04:00 AM',
    status: 'rejected',
    budget: '$750',
  },
  {
    id: 3,
    user: {
      name: 'John Smith',
      avatar: 'JS',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    },
    description: 'How Social Media Shapes College Aspirations and Choi...',
    time: '04:00 AM',
    status: 'approved',
    budget: '$600',
  },
  {
    id: 4,
    user: {
      name: 'John Smith',
      avatar: 'JS',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    },
    description: 'Instagram and the Influence on College Image Percep...',
    time: '04:00 AM',
    status: 'rejected',
    budget: '$800',
  },
  {
    id: 5,
    user: {
      name: 'John Smith',
      avatar: 'JS',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    },
    description: 'Facebook vs. Twitter: Social Media Platforms\' Influence on Student Decis...',
    time: '04:00 AM',
    status: 'approved',
    budget: '$450',
  },
];

const DataTable = () => {
  return (
    <div className="w-full min-h-[100vh] bg-[#0C0C0C] flex justify-center border border-[#0C0C0C]">
      <div className="w-full h-[90%] bg-[#191919] rounded-lg p-0">
        {/* Header */}
        <div className="grid grid-cols-[100px_150px_1fr_auto_auto_auto_auto] gap-4 p-4 text-sm font-medium text-muted-foreground bg-[#222222] rounded-lg mb-4">
          <div>User</div>
          <div>Name</div>
          <div>Description</div>
          <div>AI Performance</div>
          <div>Approved</div>
          <div>Rejected</div>
          <div>Budget</div>
        </div>

        {/* Data Rows */}
        <div className="divide-y divide-border rounded-lg overflow-hidden">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "grid grid-cols-[100px_150px_1fr_auto_auto_auto_auto] gap-4 p-2 items-center hover:bg-muted/50 transition-colors",
                index === 0 ? "bg-[#0E2833]" : "" // Highlight the first row
              )}
            >
              {/* User (Avatar only) */}
              <div className="flex items-center justify-center">
                <Avatar>
                  <AvatarImage src={item.user.image} alt={item.user.name} />
                  <AvatarFallback>{item.user.avatar}</AvatarFallback>
                </Avatar>
              </div>

              {/* Name */}
              <div className="text-foreground font-medium">{item.user.name}</div>

              {/* Description */}
              <div className="text-sm text-muted-foreground truncate">
                {item.description}
              </div>

              {/* AI Performance with time */}
              <div className="text-sm text-white flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{item.time}</span>
                <span className="mx-2">|</span>
                <a href="#" className="hover:underline">Insights</a>
              </div>

              {/* Approved */}
              <div>
                <Button
                  variant={item.status === 'approved' ? 'default' : 'outline'}
                  size="sm"
                  className={cn(
                    'gap-4 rounded-lg',
                    item.status === 'approved' && 'bg-[#4cc72e] hover:bg-[#3da424]'
                  )}
                >
                  Approved
                </Button>
              </div>

              {/* Rejected */}
              <div>
                <Button
                  variant={item.status === 'rejected' ? 'destructive' : 'outline'}
                  size="sm"
                  className={cn(
                    'gap-4 rounded-lg',
                    item.status === 'rejected' && 'bg-[#fb4f4f] hover:bg-[#e04545]'
                  )}
                >
                  Rejected
                </Button>
              </div>

              {/* Budget (Crown icon only) */}
              <div className="flex items-center justify-center">
                <Crown className="w-4 h-4 text-yellow-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataTable;
